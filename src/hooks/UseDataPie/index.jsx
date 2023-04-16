import React from 'react'
import { Context } from '../../context/dataPie'

const UseDataPie = (setterOnly = false) => {
    const ctx = React.useContext(Context);
    const {dataPie, setDataPie} = ctx;
    // console.log(dataPie, setDataPie);
    return setterOnly ? [setDataPie] : [dataPie, setDataPie];
}

export default UseDataPie
