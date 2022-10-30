import React, { useState, useTransition } from "react";
import { useEffect } from "react";

const DUMMY_ARRAY = Array(10000).fill(null);

export default function Transition() {
  const [inputNumber, setInputNumber] = useState(0);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const interval = setInterval(() => {
      startTransition(() => {
        setInputNumber((value) => value + 1);
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }, []);

  return (
    <>
      <p>아래에 입력값이 표시됩니다.</p>
      {pending ? (
        <div>
          Pending is <strong>True</strong>
        </div>
      ) : (
        DUMMY_ARRAY.map((_, index) => <div key={index}>{inputNumber}</div>)
      )}
    </>
  );
}
