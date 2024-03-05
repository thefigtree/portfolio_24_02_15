import styled, { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #ff98a2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const moveUp = keyframes`
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const TextCon = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
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
    color: gray;
    position: absolute;
  }
  .syntactic {
    transform: translateX(-100px);
    animation-name: ${moveUp};
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-duration: 2s;
    opacity: 0;
  }
  .sugar {
    right: 0;
    transform: translateX(100px);
    opacity: 0;
    animation-name: ${moveUp};
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-duration: 2s;
  }
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
      <TextCon>
        <span className="syntactic">Syntactic</span>
        <span className="sugar">Sugar.</span>
      </TextCon>
      <Stick></Stick>
    </Section>
  );
};
