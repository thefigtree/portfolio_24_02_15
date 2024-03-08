import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  padding: 5px 5%;
  background-color: #fff;
  /* border-bottom: 1px solid #fbd9dd; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  /* z-index: 10; */
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

const Logo = styled.div`
  margin-right: 20px;
  letter-spacing: 2px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  font-size: 22px;
  li {
    margin-right: 20px;
    letter-spacing: 2px;
  }
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
