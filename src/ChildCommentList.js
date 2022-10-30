import React from "react";
import renderAsFetch from "./renderAsFetch";

const responseComment = renderAsFetch("comments");

export default function ChildCommentList() {
  const dummyCommentData = responseComment.read();

  return (
    <div>
      {dummyCommentData.map((d) => (
        <h4 key={d.id}>{JSON.stringify(d)}</h4>
      ))}
    </div>
  );
}
