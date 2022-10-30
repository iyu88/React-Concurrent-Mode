import React, { useState, useEffect } from "react";
import fetchThenRender from "./fetchThenRender";

const photoData = fetchThenRender();

export default function ChildComponent() {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    photoData.then((response) => {
      setDummyData(response.data);
    });
  }, []);

  return (
    <div>
      {dummyData.length ? (
        dummyData.map((d) => <h4 key={d.id}>{JSON.stringify(d)}</h4>)
      ) : (
        <h1> 데이터 로딩 중...</h1>
      )}
      <img src="./image.JPG" alt="테스트 이미지" width="100px" />
    </div>
  );
}
