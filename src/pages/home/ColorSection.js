import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { useScrollTop } from "../../lib/useScrollTop";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: #9bb5ce;
  text-transform: uppercase;
  /* filter: brightness(0.85); */
`;

export const ColorSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);
  useScrollTop();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let Elem = sectionRef.current;
    let leftElem = leftRef.current;
    let rightElem = rightRef.current;
    let textElem = textRef.current;

    let updateColor = (color, text, rgbColor) => {
      textElem.innerText = text;
      textElem.style.color = color;
      leftElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
      rightElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    };

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `${Elem.offsetWidth + 1000}`,
        scrub: true,
        // snap: 1,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    t1.to(Elem, {
      onStart: updateColor,
      onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
    });
    t1.to(Elem, {
      onStart: updateColor,
      onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
    });
    t1.to(Elem, {
      onStart: updateColor,
      onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
    });
    t1.to(Elem, {
      onStart: updateColor,
      onStartParams: ["#574F6F", "Deep Purple", "87, 79, 111"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#574F6F", "Deep Purple", "87, 79, 111"],
    });
    t1.to(Elem, {
      onStart: updateColor,
      onStartParams: ["#A50011", "Red", "165, 0, 17"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
    });
    t1.to(Elem, {
      onStart: updateColor,
      onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
      onReverseComplete: updateColor,
      onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
    });
    // console.log(Elem.offsetWidth);
    // console.log(updateColor);

    return () => {
      if (t1) t1.revert();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef}></Left>
      <Center ref={textRef}>Sierra Blue</Center>
      <Right ref={rightRef}></Right>
    </Section>
  );
};
