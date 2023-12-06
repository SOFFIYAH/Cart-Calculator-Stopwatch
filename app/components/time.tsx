import { useEffect, useState } from "react";
interface rit {}
export default function Timesate(value: any) {
  let [minut, setMinut] = useState(0);
  let [secnd, setSecnd] = useState(0);

  return (
    <>
      <div className="text-9xl text-amber-950">
        <span>{minut}</span>
        <span>:</span>
        <span>{secnd}</span>
      </div>
      {/* ================================================================ */}
      <div className="text-lg gap-2 flex justify-center items-center">
        <button className="bg-blue-500 text-yellow-50 p-3 rounded-md">
          Start
        </button>
        <button className="bg-blue-500 text-yellow-50 p-3 rounded-md">
          Stop
        </button>
        <button className="bg-blue-500 text-yellow-50 p-3 rounded-md">
          Reset
        </button>
      </div>
    </>
  );
}
