import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DetailPage } from "./pages/DetailPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
