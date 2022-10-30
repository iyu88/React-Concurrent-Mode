import React from "react";
import renderAsFetch from "./renderAsFetch";

const response = renderAsFetch();

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
