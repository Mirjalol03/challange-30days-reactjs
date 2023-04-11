import React from "react";
import { Context } from "../context/theme";

const useTheme = (setterOnly = false) => {
    const ctx = React.useContext(Context);

    return setterOnly ? [ctx.dispatch] : [ctx.state, ctx.dispatch];
}

export default useTheme;