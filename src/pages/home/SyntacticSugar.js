import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #111;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextCon = styled.div`
  width: 100%;
  height: 50vh;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-size: 100px;
`;

export const SyntacticSugar = () => {
  return (
    <Section>
      <TextCon>
        <span>Syntactic</span>
        <span>Sugar.</span>
      </TextCon>
    </Section>
  );
};
