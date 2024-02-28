import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
// import { useScrollTop } from "../../lib/useScrollTop";

// const Section = styled.section`
//   width: 100vw;
//   height: 100vh;
//   position: relative;
//   /* background-color: #111; */
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Header = styled.header`
  position: fixed;
  /* background-color: rebeccapurple; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  z-index: 2;
`;

const TextCon = styled.h1`
  flex: 1;
  display: flex;

  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.02em;
`;

const Con = styled.div`
  flex: 1;
  font-size: 18vw;
  font-weight: 400;
  color: gray;
  text-align: center;
  /* text-transform: uppercase; */
`;

const WebCon = styled.div`
  position: fixed;
  top: 0;
  /* background-color: rebeccapurple; */
  width: 100%;
  min-height: 100vh;
`;

const Img = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
  clip-path: polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%);
  transform: rotate(30deg);
  img {
    position: relative;
    transform: scale(2);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ConHolder = styled.div`
  position: relative;
  top: -5px;
  width: 100%;
  /* background-color: #000; */
  color: #666;
  padding: 1em;
`;

const Row = styled.div`
  margin: 2em 1em;
  h1 {
    font-size: 80px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }
`;

const RowImg = styled.div`
  position: relative;
  img {
    width: 200px;
    height: 275px;
    object-fit: cover;
  }
`;

export const SyntacticSugar = () => {
  const headerRef = useRef(null);
  const textFirstRef = useRef(null);
  const textSecondRef = useRef(null);
  const webconRef = useRef(null);
  const imgRef = useRef(null);
  const conholderRef = useRef(null);
  // useScrollTop();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let Header = headerRef.current;
    let First = textFirstRef.current;
    let Second = textSecondRef.current;
    let Elem = webconRef.current;
    let Img = imgRef.current;
    let Con = conholderRef.current;

    const contentHolderHeight = Con.offsetHeight;
    const imgHolderHeight = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;
    const totalBodyHeight =
      contentHolderHeight + imgHolderHeight + additionalScrollHeight;
    document.body.style.height = `${totalBodyHeight}px`;

    // ScrollTrigger.create({
    // trigger: Elem,
    // start: "-0.1% top",
    // end: "bottom bottom",
    // onEnter: () => {
    //   gsap.set(Elem, { position: "absolute", top: "195%" });
    // },
    // onLeaveBack: () => {
    //   gsap.set(Elem, { position: "fixed", top: "0" });
    // },
    // });
    // // console.log(Elem);

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "-0.1% top",
        end: "bottom bottom",
        onEnter: () => {
          gsap.set(Elem, { position: "absolute", top: "195%" });
        },
        onLeaveBack: () => {
          gsap.set(Elem, { position: "fixed", top: "0" });
        },
        // pin: true,
        // pinSpacing: true,
      },
    });

    t1.to(First, {
      x: () => -window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });
    t1.to(Second, {
      x: () => window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });
    t1.to(Img, {
      rotation: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });
    t1.to(".imgimg", {
      scale: 1,
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });
    // console.log(totalBodyHeight);
    // return () => {
    //   if (t1) t1.revert();
    // };
  }, []);

  return (
    <>
      <Header ref={headerRef}>
        <TextCon ref={textFirstRef}>
          <Con>P</Con>
          <Con>O</Con>
          <Con>R</Con>
          <Con>T</Con>
        </TextCon>
        <TextCon ref={textSecondRef}>
          <Con>F</Con>
          <Con>O</Con>
          <Con>L</Con>
          <Con>I</Con>
          <Con>O</Con>
        </TextCon>
      </Header>

      <WebCon ref={webconRef}>
        <Img ref={imgRef}>
          <img
            className="imgimg"
            src="https://cdn.pixabay.com/photo/2021/11/17/11/02/flowers-6803234_640.png"
            alt=""
          ></img>
        </Img>
      </WebCon>

      <ConHolder ref={conholderRef}>
        <Row>
          <h1>History</h1>
        </Row>
        <Row>
          <RowImg>
            <img
              src="https://cdn.pixabay.com/photo/2021/11/17/11/02/flowers-6803234_640.png"
              alt=""
            ></img>
          </RowImg>
        </Row>
        <Row>
          <RowImg>
            <img
              src="https://cdn.pixabay.com/photo/2021/11/17/11/02/flowers-6803234_640.png"
              alt=""
            ></img>
          </RowImg>
        </Row>
        <Row>
          <RowImg>
            <img
              src="https://cdn.pixabay.com/photo/2021/11/17/11/02/flowers-6803234_640.png"
              alt=""
            ></img>
          </RowImg>
        </Row>
      </ConHolder>
    </>
  );
};
