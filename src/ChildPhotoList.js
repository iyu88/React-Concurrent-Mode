import React from "react";
import renderAsFetch from "./renderAsFetch";

const responsePhoto = renderAsFetch("photos");

export default function ChildPhotoList() {
  const dummyPhotoData = responsePhoto.read();

  return (
    <div>
      {dummyPhotoData.map((d) => (
        <h4 key={d.id}>{JSON.stringify(d)}</h4>
      ))}
    </div>
  );
}
