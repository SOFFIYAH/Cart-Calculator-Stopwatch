"use client";
import { useState } from "react";
import Dish from "../components/dis";
import Potatoes from "../components/butn";

export default function Calcu(currentvalue: any) {
  const [value, setValue] = useState(110);
  const [value2, setValue2] = useState();
  const [data, setData] = useState({
    display: "",
    operator: "",
    Fvalue: "",
    sValuue: "",
    result: "",
  });

  function validateOP(display: any) {
    let OPs = ["+", "-", "/", "*", "="];
    return OPs.every((OP) => !display.endsWith(OP));
  }

  function plus() {
    setData(function (currentData) {
      let newData = { ...currentData };
      if (validateOP(newData.display)) newData.display += "+";
      //   if (!currentData.sValuue && currentData.operator) {
      //   } else {
      //     newData.display += "+";
      //           newData.operator = "+";
      //   }
      return newData;
    });
  }

  function minus() {
    setData(function (currentData) {
      let newData = { ...currentData };
      if (validateOP(newData.display)) newData.display += "-";
      return newData;
    });
  }

  function EQ() {
    setData(function (currentData) {
      let newData = { ...currentData };
      // if (validateOP(newData.display)) newData.display += "=";
      let totl = eval(newData.display);
      newData.display = totl.toString();

      return newData;
    });
  }

  function Dev() {
    setData(function (currentData) {
      let newData = { ...currentData };
      if (validateOP(newData.display)) newData.display += "/";
      return newData;
    });
  }

  function Mul() {
    setData(function (currentData) {
      let newData = { ...currentData };
      if (validateOP(newData.display)) newData.display += "*";
      return newData;
    });
  }
  function PI() {
    setData(function (currentData) {
      let newData = { ...currentData };
      let vs = Math.PI;
      newData.display = vs.toString();
      return newData;
    });
  }

  function Dem() {
    setData(function (currentData) {
      let newData = { ...currentData };
      if (validateOP(newData.display)) newData.display += ".";
      return newData;
    });
  }

  function AC() {
    setData(function (currentData) {
      let newData = { ...currentData };
      newData.display = "";
      return newData;
    });
  }
  function DE() {
    setData(function (currentData) {
      let newData = { ...currentData };
      // console.log(newData.display);
      let chunks = newData.display.split("");
      console.log(chunks);
      // chunks.splice(-1, 1);
      chunks.pop();
      console.log(chunks);
      newData.display = chunks.join("");
      return newData;
    });
  }
  // function EQ() {
  //   setValue(function (currentData) {
  //     let newData = eval(...currentData);
  //     return newData;
  //   });
  // }

  function SEV() {
    setValue(function (currentvalue) {
      let newvalue = `${currentvalue}7`;
      return Number(newvalue);
    });
  }
  function numpad(input: number) {
    setData(function (currentvalue) {
      let newData = { ...currentvalue };
      if (currentvalue.operator) {
        newData.sValuue += input;
      } else {
        newData.Fvalue += input;
      }
      newData.display += input;
      return newData;
    });
    // setValue(function (currentvalue) {
    //   let newvalue = `${currentvalue}${input}`;
    //   return Number(newvalue);
    // });
  }
  function NumArray({ nums }) {
    return nums.map((num, index) => (
      <Potatoes className="" onclick={() => numpad(num)}>
        {num}
      </Potatoes>
    ));
  }

  return (
    <>
      <div className="m-10 flex justify-center items-center">
        <Dish value={data.display} />
      </div>
      <div className="m-10 flex justify-center items-center gap-2">
        <Potatoes className="" onclick={AC}>
          AC
        </Potatoes>
        <Potatoes className="" onclick={DE}>
          DE
        </Potatoes>
        <Potatoes className="" onclick={Dem}>
          .
        </Potatoes>
        <Potatoes className="" onclick={Dev}>
          /
        </Potatoes>
      </div>

      <div className="m-10 flex justify-center items-center gap-2">
        {/* <NumArray nums={[7, 8, 9]}></NumArray> */}
        <Potatoes className="" onclick={() => numpad(7)}>
          7
        </Potatoes>
        <Potatoes className="" onclick={() => numpad(8)}>
          8
        </Potatoes>
        <Potatoes className="" onclick={() => numpad(9)}>
          9
        </Potatoes>
        <Potatoes className="" onclick={Mul}>
          *
        </Potatoes>
      </div>

      <div className="m-10 flex justify-center items-center gap-2">
        <Potatoes className="" onclick={() => numpad(4)}>
          4
        </Potatoes>
        <Potatoes className="" onclick={() => numpad(5)}>
          5
        </Potatoes>
        <Potatoes className="" onclick={() => numpad(6)}>
          6
        </Potatoes>
        <Potatoes className="" onclick={minus}>
          -
        </Potatoes>
      </div>

      <div className="m-10 flex justify-center items-center gap-2">
        <Potatoes className="" onclick={() => numpad(1)}>
          1
        </Potatoes>
        <Potatoes className="" onclick={() => numpad(2)}>
          2
        </Potatoes>
        <Potatoes className="" onclick={() => numpad(3)}>
          3
        </Potatoes>
        <Potatoes className="" onclick={plus}>
          +
        </Potatoes>
      </div>

      <div className="m-10 flex justify-center items-center gap-2">
        <Potatoes className="" onclick={PI}>
          PI
        </Potatoes>
        <Potatoes className="" onclick={() => numpad(0)}>
          0
        </Potatoes>
        <Potatoes className="" onclick={EQ}>
          =
        </Potatoes>
      </div>
    </>
  );
}
