// import { useEffect, useRef } from "react";

import styled from "styled-components";

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

const Text = styled.p`
  width: 50%;
  font-size: 31px;
  position: relative;
  height: 80px;
  span {
    background-color: lightblue;
    position: absolute;
  }
`;

export const Quote = () => {
  // const headerRef = useRef();

  // const scrollHandler = () => {};

  // useEffect(() => {});

  return (
    <Section>
      <TextContainer>
        <Text>
          <span>line-1</span>
        </Text>
        <Text>
          <span>line-2</span>
        </Text>
        <Text>
          <span>line-3</span>
        </Text>
        <Text>
          <span>line-4</span>
        </Text>
        <Text>
          <span>line-5</span>
        </Text>
      </TextContainer>
    </Section>
  );
};
