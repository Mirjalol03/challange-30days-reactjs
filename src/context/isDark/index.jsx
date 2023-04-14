import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();


const Provider = ({ children }) => {
    const [isDark, setIsDark] = useState(localStorage.getItem('isDark') ? localStorage.getItem('isDark') : false);

    useEffect(() => {
            localStorage.setItem('isDark', isDark);
    }, [isDark]);

    return (
        <Context.Provider value={{ isDark, setIsDark }}>
        {children}
        </Context.Provider>
    );
}

export { Context, Provider };