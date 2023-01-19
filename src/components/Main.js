import React, { useState } from "react";
import InputBox from "./InputBox.js";
import QR from "./QR.js";

export default function Main() {
  const [alias, setAlias] = useState("");

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <InputBox setAlias={setAlias} />
      <QR alias={alias} />
    </div>
  );
}
