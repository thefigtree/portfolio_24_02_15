import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  padding: 5px 5%;
  background-color: #ff98a2;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: end;
  position: relative;
  top: 0;
  left: 0;
  /* z-index: 10; */
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
      <Menu>
        <li>About</li>
        <li>Stack</li>
        <li>Contact</li>
      </Menu>
    </SHeader>
  );
};
