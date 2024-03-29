import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { About } from "./about/About";
import { Archive } from "./archive/Archive";
import { Contact } from "./contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path={routes.home} element={<Home></Home>}></Route>
        <Route path={routes.about} element={<About></About>}></Route>
        <Route path={routes.archive} element={<Archive></Archive>}></Route>
        <Route path={routes.contact} element={<Contact></Contact>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
