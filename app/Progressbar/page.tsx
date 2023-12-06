"use client";

import { useState } from "react";
import Bodytext from "../components/bodytext";
import Probarb from "../components/probar";

export default function ProgressBar() {
  let [wid, setWid] = useState(0);
  function ef() {
    let h = window.innerHeight,
      H = document.body.clientHeight,
      srl = window.scrollY,
      t = (srl / (H - h)) * 100;
    let fin = { width: `${t}%` };
    console.log(t);
  }
  window.addEventListener("scroll", ef);
  return (
    <>
      <body className="p-7 bg-slate-300">
        <Probarb /*style={fin}*/></Probarb>
        <div className="bg-slate-100 text-center">
          <Bodytext></Bodytext>
        </div>
      </body>
    </>
  );
}
