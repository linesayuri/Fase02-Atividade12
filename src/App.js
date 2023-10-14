import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import { NormalizeStyles } from "./shared/NormalizeStyles";

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;