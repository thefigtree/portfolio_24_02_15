import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageNotFound } from "./pages/PageNotFound";

import { Home } from "./pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
