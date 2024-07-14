import { SyntacticSugar } from "./SyntacticSugar";
import { ColorSection } from "./ColorSection";
import { StackSection } from "./StackSection";
import { useScrollTop } from "../../lib/useScrollTop";

export const Home = () => {
  useScrollTop();

  return (
    <>
      <SyntacticSugar></SyntacticSugar>
      <ColorSection></ColorSection>
      <StackSection></StackSection>
    </>
  );
};
