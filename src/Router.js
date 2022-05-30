import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPark from "./pages/jongwon/Login/Login";
import MainPark from "./pages/jongwon/Main/Main";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPark />} />
      <Route path="/main-park" element={<MainPark />} />
    </Routes>
  );
}

export default Router;
