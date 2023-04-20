import React from "react";
import "./Root.css";
import MemoWorks from "../components/MemoWorks";
import UseMemoWorks from "../components/UseMemoWorks";
import UseCallBackWorks from "../components/UseCallBackWorks";

const Root = () => {
  const [counter, setCounter] = React.useState(0);
  console.log("Root render");
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <MemoWorks></MemoWorks>
      <UseMemoWorks></UseMemoWorks>
      <UseCallBackWorks></UseCallBackWorks>
    </>
  );
};

export default Root;
