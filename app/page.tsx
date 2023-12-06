"use client";
import Image from "next/image";
import Btn from "./components/btn";
import Seed from "./components/display";
import { useState } from "react";
import Link from "next/link";
const links = ["Calcu"];
export default function Home() {
  const [value, setValue] = useState(0);

  function suB() {
    if (value == 0) return 0;
    setValue(value - 1);
  }
  function adD() {
    if (value >= 100) return 100;
    setValue(value + 1);
  }
  function reset() {
    setValue(0);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <Btn onClick={suB}>-</Btn>
      <Seed value={value} />
      <Btn onClick={adD}>+</Btn>
      <Btn onClick={reset}>RESET</Btn>
    </div>
  );
}
