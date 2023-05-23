import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./views/Landing";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route></Route>
    </Routes>
    <Landing />
    </BrowserRouter>

  );
}

export default App;
