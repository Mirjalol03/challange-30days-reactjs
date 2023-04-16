import React from "react";
import "./Root.css";
import SubmitPie from "../components/submitPie";
import UseDataPie from "../hooks/UseDataPie";
import ReactEcharts from "echarts-for-react";


const Root = () => {
  const [dataPie, setDataPie] = UseDataPie();
  console.log(dataPie, setDataPie);


  return (
    <>
      <div className="main-wrapper">
        <div className="main__pie">

          <div style={{ width: "400px", height: 440 }}>
            <ReactEcharts option={dataPie} style={{ height: "100%" }} />
          </div>
        </div>
        <SubmitPie></SubmitPie>
      </div>
    </>
  );
};

export default Root;
