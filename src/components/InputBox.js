import React, { useEffect, useState } from "react";

export default function InputBox({ setAlias }) {
  const [ph, setPh] = useState("");

  const randomAlias = () => {
    let res = [];
    let palabras = ["tiempo", "pelota", "auto", "fecha", "pomelo"];
    for (let i = 0; i < 3; i++) {
      const j = Math.floor(Math.random() * palabras.length);
      res.push(palabras[j]);
      palabras = palabras.filter((element, index) => index != j);
    }
    return res.join(".");
  };

  useEffect(() => {
    const random_alias = randomAlias();
    setAlias(random_alias);
    setPh(random_alias);
  }, []);

  return (
    <div className="w-full px-3 lg:px-0 lg:w-3/4">
      <input
        type="text"
        placeholder={ph}
        onSelect={(e) => (e.target.placeholder = "")}
        onChange={(e) => setAlias(e.target.value)}
        className="w-full text-3xl md:text-7xl text-center border-2 px-5 py-3 rounded-lg focus-visible:outline-3 focus-visible:outline-slate-300"
      ></input>
    </div>
  );
}
