import React from "react";
import "./Root.css";
import { helloWithFlags } from "../utils/helloWorld";
import HelloWorld from "../style/style";

const Root = () => {
  const [helloCount, setHelloCount] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      setHelloCount((helloCount) =>
        helloCount < helloWithFlags.length - 1 ? helloCount + 1 : 0
      );
    }, 2000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  const handleMouseEnter = () => {
    console.log("mouse enter")
    clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave")
    setIntervalId(
      setInterval(() => {
        setHelloCount((helloCount) =>
          helloCount < helloWithFlags.length - 1 ? helloCount + 1 : 0
        );
      }, 2000)
    );
  };

  return (
    <>
      <div className="card-container">
        <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card-flag">
            <img
              src={helloWithFlags[helloCount].Flag}
              alt={helloWithFlags[helloCount].Message}
            />
          </div>
          <div className="card-message">
            <HelloWorld>{helloWithFlags[helloCount].Message}</HelloWorld>
          </div>
        </div>
      </div>
    </>
  );
};


export default Root;
