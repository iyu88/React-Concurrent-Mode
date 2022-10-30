import React, { useState, useDeferredValue } from "react";
import { useEffect } from "react";

const DUMMY_ARRAY = Array(10000).fill(null);

export default function DeferredValue() {
  const [inputNumber, setInputNumber] = useState(0);
  const deferredValue = useDeferredValue(inputNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      setInputNumber((value) => value + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }, []);

  return (
    <>
      <p>아래에 입력값이 표시됩니다.</p>
      {DUMMY_ARRAY.map((_, index) => (
        <div key={index}>{deferredValue}</div>
      ))}
    </>
  );
}
