import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-color: #111; */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  position: fixed;
  /* background-color: rebeccapurple; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
`;

const TextCon = styled.h1`
  display: flex;

  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

const Con = styled.div`
  font-size: 18vw;
  font-weight: 400;
  color: #666;
  text-align: center;
  text-transform: uppercase;
`;

const WebCon = styled.div`
  position: fixed;
  top: 0;
  /* background-color: rebeccapurple; */
  width: 100%;
  min-height: 100vh;
`;

const Img = styled.div`
  img {
    width: 100%;
    height: 100vh;
    position: relative;
    top: 0;
    clip-path: polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%);
    transform: rotate(30deg);
  }
`;

export const SyntacticSugar = () => {
  const headerRef = useRef(null);
  const textFirstRef = useRef(null);
  const textSecondRef = useRef(null);
  const webconRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let Header = headerRef.current;
    let First = textFirstRef.current;
    let Second = textSecondRef.current;
    let Elem = webconRef.current;

    ScrollTrigger.create({
      trigger: Elem,
      start: "-0.1% top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.set(Elem, { position: "absolute", top: "195%" });
      },
      onLeaveBack: () => {
        gsap.set(Elem, { position: "fixed", top: "0" });
      },
    });

    gsap.to(First, {
      x: () => -4320,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    gsap.to(Second, {
      x: () => +4320,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });
  }, []);

  return (
    <Section>
      <Header ref={headerRef}>
        <TextCon ref={textFirstRef}>
          <Con>a</Con>
          <Con>r</Con>
          <Con>t</Con>
          <Con>w</Con>
        </TextCon>
        <TextCon ref={textSecondRef}>
          <Con>o</Con>
          <Con>r</Con>
          <Con>k</Con>
          <Con>s</Con>
        </TextCon>
      </Header>

      <WebCon ref={webconRef}>
        <Img>
          <img
            src="https://cdn.pixabay.com/photo/2021/11/17/11/02/flowers-6803234_640.png"
            alt=""
          ></img>
        </Img>
      </WebCon>
    </Section>
  );
};
