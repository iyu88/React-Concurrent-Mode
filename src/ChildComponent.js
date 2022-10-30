import React from "react";
import fetchDummyData from "./fetchDummyData";

const response = fetchDummyData();

export default function ChildComponent() {
  const dummyData = response.read();

  return (
    <div>
      {dummyData.data.map((d) => (
        <h4 key={d.id}>{JSON.stringify(d)}</h4>
      ))}
    </div>
  );
}
