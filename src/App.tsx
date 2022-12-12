import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Reset } from "styled-reset";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import PostPage from "./pages/Posts";
import SignInPage from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Reset />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
