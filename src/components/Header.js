import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  padding: 40px 0%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  a {
    color: #6e6e73;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  position: absolute;
  left: 50px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  position: absolute;
  right: 15%;

  li {
    font-size: 15px;
    margin-left: 30px;
  }
`;

export const Header = () => {
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
    <SHeader>
      <Logo ref={colorRef}>
        <Link to={routes.home}>J !N</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.archives}>Archives</Link>
        </li>
        <li>
          <Link to={routes.about}>About</Link>
        </li>
        <li>
          <Link to={routes.contact}>Contact</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
