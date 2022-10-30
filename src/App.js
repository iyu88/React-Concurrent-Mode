import { Suspense } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  return (
    <Suspense fallback={<h1>데이터 로딩 중...</h1>}>
      <ChildComponent />
    </Suspense>
  );
}

export default App;
