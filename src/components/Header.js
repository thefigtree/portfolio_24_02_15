import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  padding: 20px 0%;
  /* height: 50px; */
  background-color: #fff;
  border-bottom: 1px solid #fbd9dd;
  /* display: flex; */
  /* justify-content: space-around;
  align-items: center; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Stick = styled.div`
  width: 1px;
  height: 100%;
  background-color: silver;
  position: absolute;
  top: 0;
  left: 25%;
  &:nth-child(2) {
    left: 50%;
  }
  &:nth-child(3) {
    left: 75%;
  }
`;

// const Wrap = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-between;
// `;

const Logo = styled.div`
  /* margin-right: 20px;
  letter-spacing: 2px; */

  font-size: 22px;
  position: absolute;
  background-color: blue;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  /* z-index: 10; */
  /* text-align: center; */
`;

const Menu = styled.ul`
  width: 75%;
  position: absolute;
  background-color: red;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  color: gray;
  font-size: 22px;
  letter-spacing: 2px;
  /* &:nth-child(1) {
    left: 25%;
  }
  &:nth-child(2) {
    left: 50%;
  }
  &:nth-child(3) {
    left: 75%;
  } */
`;

export const Header = () => {
  return (
    <SHeader>
      <Stick></Stick>
      <Stick></Stick>
      <Stick></Stick>

      <Logo>
        <Link to={routes.home}>이동진</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.about}>Me</Link>
        </li>
        <li>
          <Link to={routes.archive}>Archive</Link>
        </li>
        <li>
          <Link to={routes.contact}>Contact</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
