import { HashRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Home } from "./pages/home/Home";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { Portfolio } from "./portfolio/Portfolio";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path={routes.home} element={<Home></Home>}></Route>
        <Route
          path={routes.portfolio}
          element={<Portfolio></Portfolio>}
        ></Route>
        <Route path={routes.about} element={<About></About>}></Route>
        <Route path={routes.contact} element={<Contact></Contact>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
