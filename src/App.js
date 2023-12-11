import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { NotFound } from "./NotFound";
import { NormalizeStyles } from "./shared/NormalizeStyles";
import { Header } from "./common-components/Header/Header";
import { MyAcoount } from "./components/MyAccount/MyAccount";
import { MyData } from "./components/MyAccount/MyData";

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/my_account" element={<MyAcoount />} />
          <Route path="/my_data" element={<MyAcoount />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
