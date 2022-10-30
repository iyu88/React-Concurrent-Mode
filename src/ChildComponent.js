import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChildComponent() {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const dataUrl = "https://jsonplaceholder.typicode.com/photos";
    const fetchOnRender = async () => {
      try {
        const response = await axios.get(dataUrl);
        setDummyData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOnRender();
  }, []);

  return (
    <div>
      <img src="./image.JPG" alt="테스트 이미지" width="100px" />
      {dummyData.length ? (
        dummyData.map((d) => <h4 key={d.id}>{JSON.stringify(d)}</h4>)
      ) : (
        <h1> 데이터 로딩 중...</h1>
      )}
    </div>
  );
}
