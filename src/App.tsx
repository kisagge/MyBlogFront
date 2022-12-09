import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes></Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
