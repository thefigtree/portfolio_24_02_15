import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #fff;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const TextCon = styled.h2`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  font-size: 170px;
  font-family: "Geologica", sans-serif;
  font-weight: 400;
  font-style: normal;
  /* letter-spacing: 3px; */
  color: white;
`;

export const SyntacticSugar = () => {
  const colorRef = useRef(null);

  const STEP_DURATION = 0.15;

  useLayoutEffect(() => {
    const COLORS_ARRAY = [
      "#f25b40",
      "#2c3d71",
      "#e92d65",
      "#f7b1cf",
      "#86c1f7",
      "#ffd570",
      "#0e0e0e",
    ];
    let Elem = colorRef.current;

    gsap.set(Elem, { autoAlpha: 1 });

    const SplitText = new SplitType(Elem, { types: "chars" });

    gsap.set(SplitText.chars, { color: COLORS_ARRAY[0] });

    gsap.registerEffect({
      name: "changeColor",
      effect: (targets, config) => {
        return gsap.set(targets, {
          delay: config.duration,
          color: config.color,
        });
      },
      default: { duration: STEP_DURATION },
      extendTimeline: true,
    });

    gsap.from(SplitText.chars, {
      scale: 0,
      stagger: STEP_DURATION,
      ease: "back.out",
      color: (index, targets) => {
        const t1Colors = gsap.timeline();
        COLORS_ARRAY.forEach((color) => {
          t1Colors.changeColor(targets, {
            duration: STEP_DURATION,
            color: color,
          });
        });
      },
    });
    // return () => {
    //   if (SplitText) SplitText.revert();
    // };
  }, []);

  return (
    <Section>
      <TextCon ref={colorRef}>SyntacticSugar</TextCon>
    </Section>
  );
};
