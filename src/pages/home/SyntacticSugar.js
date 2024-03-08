import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextCon = styled.h2`
  font-size: 160px;
  font-family: "Geologica", sans-serif;
  font-weight: 700;
  font-style: normal;
  letter-spacing: 3px;
  color: white;
`;

const Stick = styled.div`
  width: 1px;
  height: 100%;
  background-color: #98fb98;
  position: absolute;
  top: 0;
  left: 25%;
  .second {
    width: 1px;
    height: 100%;
    background-color: #98fb98;
    position: absolute;
    top: 0;
    left: 50%;
  }
`;

export const SyntacticSugar = () => {
  const colorRef = useRef(null);

  const STEP_DURATION = 0.1;

  useLayoutEffect(() => {
    const COLORS_ARRAY = [
      "#fff",
      "#fff",
      "#fff",
      "#f1fff1",
      "#deffde",
      "#cefbce",
      "#bbfcbb",
      "#98fb98",
      "#6dff6d",
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
      <Stick></Stick>
      <Stick className="second"></Stick>
      <Stick className="third"></Stick>
    </Section>
  );
};
