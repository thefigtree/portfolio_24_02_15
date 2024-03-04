import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #3000f0;
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
  span {
    font-family: "Geologica", sans-serif;
    font-weight: 900;
    font-style: normal;
    letter-spacing: 7px;
    color: #ff0098;
  }
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
