import { useState } from "react";
export default function Probarb() {
  let BAR = document.querySelector("bar");
  let [wid, setWid] = useState("");
  function ef() {
    let h = window.innerHeight,
      H = document.body.clientHeight,
      srl = window.scrollY,
      t = (srl / (H - h)) * 100;
    let fin = t.toString(),
      p = fin + "%";
    console.log(p);
    setWid(p);
  }
  window.addEventListener("scroll", ef);

  return (
    <div
      id="bar"
      className=" bg-yellow-400 h-5 fixed opacity-25"
      style={{ width: wid }}
    ></div>
  );
}
