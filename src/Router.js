import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPark from "./pages/jongwon/Login/Login";
import MainPark from "./pages/jongwon/Main/Main";
import LoginKim from "./pages/jihyeon/Login/Login";
import MainKim from "./pages/jihyeon/Main/Main";
import LoginYu from "./pages/kwanghyun/Login/Login";
import MainYu from "./pages/kwanghyun/Main/Main";
import LoginSon from "./pages/sohee/Login/Login";
import MainSon from "./pages/sohee/Main/Main";
import LoginSeo from "./pages/sumin/Login/Login";
import MainSeo from "./pages/sumin/Main/Main";

function Router() {
  return (
    <Routes>
      <Route path="/main-park" element={<MainPark />} />
      <Route path="/login-kim" element={<LoginKim />} />
      <Route path="/main-kim" element={<MainKim />} />
      <Route path="/login-park" element={<LoginPark />} />
      <Route path="/main-park" element={<MainPark />} />
      <Route path="/login-son" element={<LoginSon />} />
      <Route path="/main-son" element={<MainSon />} />
      <Route path="/login-seo" element={<LoginSeo />} />
      <Route path="/main-seo" element={<MainSeo />} />
      <Route path="/login-yu" element={<LoginYu />} />
      <Route path="/main-yu" element={<MainYu />} />
    </Routes>
  );
}

export default Router;
