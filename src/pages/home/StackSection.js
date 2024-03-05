import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #ff98a2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StackSection = () => {
  return <Section>My Stack</Section>;
};
