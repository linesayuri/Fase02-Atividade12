import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { NotFound } from "./NotFound";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { Header } from "./common-components/Header/Header";

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
