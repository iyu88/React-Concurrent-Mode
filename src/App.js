import { Suspense } from "react";
import "./App.css";
import ChildPhotoList from "./ChildPhotoList";
import ChildCommentList from "./ChildCommentList";

function App() {
  return (
    <>
      <Suspense fallback={<h1>데이터 로딩 중...</h1>}>
        <ChildPhotoList />
      </Suspense>
      <Suspense fallback={<h1>데이터 로딩 중...</h1>}>
        <ChildCommentList />
      </Suspense>
    </>
  );
}

export default App;
