import React, { useState, useEffect } from "react";
import fetchThenRender from "./fetchThenRender";

const fetchDummyData = () => {
  return Promise.all([
    fetchThenRender("photos"),
    fetchThenRender("comments"),
  ]).then(([photos, comments]) => [photos, comments]);
};

const dummyData = fetchDummyData();

export default function ChildComponent() {
  const [dummyPhotoData, setDummyPhotoData] = useState([]);
  const [dummyCommentData, setDummyCommentData] = useState([]);

  useEffect(() => {
    dummyData.then(([photos, comments]) => {
      setDummyPhotoData(photos.data);
      setDummyCommentData(comments.data);
    });
  }, []);

  return (
    <div>
      {dummyPhotoData.length ? (
        dummyPhotoData.map((d) => <h4 key={d.id}>{JSON.stringify(d)}</h4>)
      ) : (
        <h1> 데이터 로딩 중...</h1>
      )}
      {dummyCommentData.length ? (
        dummyCommentData.map((d) => <h4 key={d.id}>{JSON.stringify(d)}</h4>)
      ) : (
        <h1> 데이터 로딩 중...</h1>
      )}
    </div>
  );
}
