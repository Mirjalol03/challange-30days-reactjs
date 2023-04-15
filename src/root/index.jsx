import React from "react";
import "./Root.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import SubmitPie from "../components/SubmitPie";
import { UseDataPie } from "../hooks/useDataPie";

ChartJS.register(ArcElement, Tooltip, Legend);
const [dataPie, setDataPie] = UseDataPie()

console.log(dataPie);

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };



const Root = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="main__pie">
          <Pie data={dataPie} />
        </div>
          <SubmitPie></SubmitPie>
      </div>
    </>
  );
};

export default Root;
