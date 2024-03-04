import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  padding: 5px 5%;
  background-color: #111;
  border-bottom: 1px solid pink;
  display: flex;
  justify-content: end;
  position: relative;
  top: 0;
  left: 0;
  /* z-index: 10; */
`;

const Menu = styled.ul`
  /* width: 30%; */
  display: flex;
  /* background-color: rebeccapurple; */
  justify-content: space-between;
  align-items: center;
  color: pink;
  font-size: 40px;
  li {
    margin-right: 20px;
    font-family: "Blaka Hollow", system-ui;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 5px;
  }
`;

const About = styled.li``;

const Stack = styled.li``;

const Contact = styled.li``;

export const Header = () => {
  return (
    <SHeader>
      <Menu>
        <About>ABOUT</About>
        <Stack>(STACK)</Stack>
        <Contact>CONTACT</Contact>
      </Menu>
    </SHeader>
  );
};
