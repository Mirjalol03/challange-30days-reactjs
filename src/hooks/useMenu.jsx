import React from "react";
import { Context } from "../context/Menu";


const useMenu = (setterOnly) => {
    const ctx = React.useContext(Context);

    return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState];
} 

export default useMenu;