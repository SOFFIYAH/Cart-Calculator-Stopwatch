"use client";
import { useState } from "react";
import Bodytext from "../components/bodytext";
import Probarb from "../components/probar";
import Timesate from "../components/time";
// import Timebtnz from "../components/timebtnz";

export default function Stopwatch() {
  let [minut, setMint] = useState("00");
  let [secnd, setSecnd] = useState("00");
  return (
    <>
      <div className="mt-24 flex justify-center items-center ">
        <Probarb />
        <div className="  bg-yellow-400 table-row p-5">
          <Timesate />
          {/* <div className="flex justify-center items-center">
            {/* <Timebtnz /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
