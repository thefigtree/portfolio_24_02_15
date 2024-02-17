import styled, { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: wheat;
`;

const moveUp = keyframes`
100% {
  transform: translateY(0);
}
`;

const Text = styled.p`
  width: 50%;
  font-size: 21px;
  position: relative;
  height: 35px;
  overflow: hidden;
  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    background: linear-gradient(
      -45deg,
      #35c3f3 0%,
      #8b9fe8 20%,
      #e681d8 39%,
      #ffa9a4 76%,
      #fed2ce 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .myname {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(
      -180deg,
      #35c3f3 0%,
      #8b9fe8 20%,
      #e681d8 39%,
      #ffa9a4 76%,
      #fed2ce 100%
    );
  }
`;

export const Quote = () => {
  return (
    <Section>
      <TextContainer>
        <Text delay="0">
          <span>line-1</span>
        </Text>
        <Text delay="0.4s">
          <span>line-2</span>
        </Text>
        <Text delay="0.8s">
          <span>line-3</span>
        </Text>
        <Text delay="1.2s">
          <span>line-4</span>
        </Text>
        <Text delay="1.6s">
          <span className="myname">- 이동진</span>
        </Text>
      </TextContainer>
    </Section>
  );
};
