import React from "react";
import "./SubmitPie.scss";
import {
  Button,
  TextField,
} from "@mui/material";
import UseDataPie from "../../hooks/UseDataPie";

const SubmitPie = () => {
  const [dataPie, setDataPie] = UseDataPie();



  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const [name, number] = evt.target.elements;

    const newData = {
      ...dataPie,
      legend: {
        ...dataPie.legend,
        data: [...dataPie.legend.data, name.value],
      },
      series: [
        {
          ...dataPie.series[0],
          data: [
            ...dataPie.series[0].data,
            {
              value: number.value,
              name: name.value,
            },
          ],
        },
      ],
    };
  
    setDataPie(newData);
    evt.target.reset();
  }
  return (
    <>
      <div className="pie-form">
        <form onSubmit={(evt) => handleSubmitForm(evt)}>
          <div className="pie-form-group">
            <TextField required id="filled-basic" label="Name" variant="filled" />
          </div>
          <div className="pie-form-group">
            <TextField
            required
              id="filled-basic"
              label="Number"
              type="number"
              variant="filled"
            />
          </div>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default SubmitPie;
