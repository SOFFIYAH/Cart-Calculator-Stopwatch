import { futimes } from "fs";
import { useEffect, useState } from "react";

export default function Timesate(value: any) {
  let [minut, setMinut] = useState(0);
  let [secnd, setSecnd] = useState(0);
  let time = 0,
    Run = false,
    Tvl;
  function Tsrt() {
    if (Run) return;
    Run = true;
    Tvl = setInterval(tointerval, 1000);
  }
  function Tstp() {
    if (!Run) return;
    Run = false;
    clearInterval(Tvl);
  }
  function Trst() {
    Tstp();
    time = 0;
    setMinut(0);
    setSecnd(0);
  }
  function tointerval() {
    time += 1;
    let min = Math.floor(time / 60),
      sec = time % 60;
    setMinut(min);
    setSecnd(sec);
  }

  return (
    <>
      <div className="text-9xl text-amber-950">
        <span>{minut < 10 ? "0" + minut : minut}</span>
        <span>:</span>
        <span>{secnd < 10 ? "0" + secnd : secnd}</span>
      </div>
      {/* ================================================================ */}
      <div className="text-lg gap-2 flex justify-center items-center">
        <button
          className="bg-blue-500 text-yellow-50 p-3 rounded-md"
          onClick={Tsrt}
        >
          Start
        </button>
        <button
          className="bg-blue-500 text-yellow-50 p-3 rounded-md"
          onClick={Tstp}
        >
          Stop
        </button>
        <button
          className="bg-blue-500 text-yellow-50 p-3 rounded-md"
          onClick={Trst}
        >
          Reset
        </button>
      </div>
    </>
  );
}
