import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Donaciones from "./components/Donaciones.js";
import Footer from "./components/Footer.js";
import React from "react";

export default function App() {
  return (
    <div className="App font-open-sans block h-fit md:min-h-screen md:flex flex-col justify-between">
      <div>
        <Header />
        <Main />
      </div>
      <div>
        <Donaciones />
        <Footer />
      </div>
    </div>
  );
}
