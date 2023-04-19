import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
    const [posts, setPosts] = React.useState({});
    
    const value = { posts, setPosts };
    
    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Context, Provider };   