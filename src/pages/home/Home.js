import { SyntacticSugar } from "./SyntacticSugar";
// import { ColorSection } from "./ColorSection";
import { StackSection } from "./StackSection";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <SyntacticSugar></SyntacticSugar>
      {/* <ColorSection></ColorSection> */}
      <StackSection></StackSection>
    </>
  );
};
