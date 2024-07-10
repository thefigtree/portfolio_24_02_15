import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #fff;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StackSection = () => {
  return <Section>My Stack</Section>;
};
