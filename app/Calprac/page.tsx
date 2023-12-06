"use client";
import { useState } from "react";
import Dish from "../components/dis";
import Potatoes from "../components/butn";

export default function Home(currentvalue: any) {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState();
  const [data, setData] = useState({
    display: "",
    operator: "",
    fValue: "",
    sValue: "",
    result: "",
  });

  function validateOP(display: any) {
    let OPs = ["+", "-", "/", "*", "="];
    return OPs.every((OP) => !display.endsWith(OP));
  }

  function keyNum(input: number) {
    setData(function (currentvalue) {
      let newData = { ...currentvalue };
      if (currentvalue.operator) {
        newData.sValue += input;
      } else {
        newData.fValue += input;
      }
      newData.display += input;
    });
    setData(function (currentvalue) {
      let newData = `${currentvalue}${input}`;
      return Number(newData);
    });
  }
  function MILO({ nums }) {
    return nums.map((num, index) => (
      <Potatoes onclick={() => keyNum(num)}>{num}</Potatoes>
    ));
  }

  return (
    <>
      <div className="m-10 flex justify-center items-center">
        <Dish value={data.display} />
      </div>
      <div className="m-10 flex justify-center items-center gap-2">
        <MILO nums={[7, 8, 9]}></MILO>
      </div>

      <div className="m-10 flex justify-center items-center gap-2">
        <MILO nums={[4, 5, 6]}></MILO>
      </div>

      <div className="m-10 flex justify-center items-center gap-2">
        <MILO nums={[1, 2, 3]}></MILO>
      </div>
    </>
  );
}
