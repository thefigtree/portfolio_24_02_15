import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #ff98a2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextCon = styled.h2`
  font-size: 100px;
  font-family: "Geologica", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 3px;
  color: gray;
`;

const Stick = styled.div`
  width: 90%;
  height: 1px;
  background-color: gray;
  position: absolute;
  bottom: 0;
`;

export const SyntacticSugar = () => {
  return (
    <Section>
      <TextCon>SyntacticSugar.</TextCon>
      <Stick></Stick>
    </Section>
  );
};
