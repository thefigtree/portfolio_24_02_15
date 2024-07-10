import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  padding: 30px 0%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
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
    color: gray;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>j !n</Link>
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
