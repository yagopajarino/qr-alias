import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Donaciones from "./components/Donaciones.js";
import Footer from "./components/Footer.js";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Donaciones />
      <Footer />
    </div>
  );
}
