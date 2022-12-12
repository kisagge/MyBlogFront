import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Reset } from "styled-reset";
import Navbar from "./components/Navbar";
import MainPage from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Reset />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
