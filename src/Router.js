import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorSection } from "./sections/ColorSection";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ColorSection></ColorSection>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
