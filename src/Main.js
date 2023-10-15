import React from "react";
import { Button } from './common-components/button/Button';
import { Header } from "./common-components/Header/Header";
import { MenuOne } from "./common-components/MenuOne/MenuOne";

const Main = () => {
  return (
    <>
      <Header />
      <div>
        <h2>Main Component</h2>
        Página Inicial
        <Button>Entrar</Button>
        <Button ghost={true}>Cadastrar</Button>
      </div>
      <div>
        <MenuOne />
        <h2>Menu</h2>
      </div>
    </>
  );
};

export { Main };