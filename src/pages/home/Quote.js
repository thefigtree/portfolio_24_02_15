import styled from "styled-components";

const Section = styled.section`
  /* width: 100vw; */
  height: 100vh;
  background-color: #111;
  color: black;
  /* position: relative; */
`;

const Mask = styled.p`
  max-width: 1000px;
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #afa18f;
  font-size: 32px;
  line-height: 40px;
  position: absolute;
  mask-image: url("../../assets/mask.svg");
  background: #ec4e39;
  mask-repeat: no-repeat;
  span {
    color: #ec4e39;
  }
`;

const Banner = styled.p`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #afa18f;
  font-size: 32px;
  line-height: 40px;
`;

export const Quote = () => {
  return (
    <Section>
      <Mask>
        <p>
          <span>Syntactic sugar</span> in programming languages refers to syntax
          within the language that makes it easier for humans to read and write.
          It doesn't add any new functionality to the language, but rather
          provides a more convenient way to express existing functionality. This
          can make the code more readable and expressive. Examples of syntactic
          sugar include shorthand notations, special syntax for common patterns,
          and other language features that simplify the code without changing
          its underlying meaning.
        </p>
      </Mask>
      <Banner>
        Syntax Sugar는 한국어로 문법 설탕이라고 번역됩니다. JS뿐만 아니라
        프로그래밍 언어 전반적으로 적용되는 개념이며, 달달한 이름에 걸맞게 읽는
        사람 또는 작성하는 사람이 편하게 디자인 된 문법이라는 뜻을 갖고
        있습니다. Syntax Sugar는 직관적이고 간결한 문법을 갖고 있습니다.
        번거롭게 작성해야 했던 코드가 짧아진 덕분에 가독성이 좋아지는 효과가
        있습니다. 모든 상황에 Syntax Sugar를 적용하는 것이 옳지는 않지만,
        직관적으로 작성자의 의도를 알 수 있는 코드라면 Syntax Sugar를 사용하는
        것이 생산성을 높여줄 것입니다.
      </Banner>
    </Section>
  );
};
