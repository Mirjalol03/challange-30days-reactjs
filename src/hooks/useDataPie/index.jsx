import React, { useContext } from "react";
import { Context } from "../../context/dataPie";

const UseDataPie = (setterOnly = false) => {
  const ctx = useContext(Context);

    const { dataPie, setDataPie } = ctx;

  return setterOnly ? [setDataPie] : [dataPie, setDataPie];
};

export { UseDataPie };
dataPie