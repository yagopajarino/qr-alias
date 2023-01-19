import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Donaciones from "./components/Donaciones.js";
import Footer from "./components/Footer.js";
import React from "react";

export default function App() {
  return (
    <div className="font-open-sans w-full h-screen justify-between flex items-center flex-col">
      <div className="w-full flex items-center flex-col">
        <Header />
        <Main />
      </div>
      <div className="w-full mt-5">
        <Donaciones />
        <Footer />
      </div>
    </div>
  );
}
