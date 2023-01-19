import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QR({ alias }) {
  const [qr, setQr] = useState();
  const [qrd, setQrd] = useState();

  const generateQR = async (text, size) => {
    try {
      return await QRCode.toDataURL(text, { width: size });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateQR(alias ? alias : "template", 350).then((r) => setQr(r));
    generateQR(alias ? alias : "template", 500).then((r) => setQrd(r));
  }, [alias]);

  return (
    <div className="flex items-center w-full justify-center">
      <img src={qr}></img>
      <a href={qrd} download={`${alias}-qr.png`}>
        <button className="py-4 px-8 bg-violet-300 rounded-lg shadow-sm mb-5 font-thin text-xl hover:bg-violet-400 transition-colors">
          Descargar
        </button>
      </a>
    </div>
  );
}
