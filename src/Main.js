import React from "react";
import { Header } from "./common-components/Header/Header";
import { MenuOne } from "./common-components/MenuOne/MenuOne";
import { BannerMain } from "./components/Banner/Banner";
import { Ranking } from "./components/Ranking/Ranking";

const Main = () => {
  return (
    <>
      <Header />
      <div>
        <h2>Main Component</h2>
      </div>
      <div>
        <MenuOne />
        <h2>Menu</h2>
      </div>
      <div>
        <BannerMain />
      </div>
      <div>
        <Ranking />
      </div>
    </>
  );
};

export { Main };