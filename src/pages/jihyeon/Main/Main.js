import React, { useEffect, useState } from "react";
import Header from "./Components/header";
import Feed from "./Components/Feed";
import Aside from "./Aside/Asid";
import "./Main.scss";

function MainKim() {
  return (
    <>
      <Header />
      <main>
        <Feed />
        <Aside />
      </main>
    </>
  );
}

export default MainKim;
