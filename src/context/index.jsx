import React from 'react'
import { Provider as IsDarkProvider } from './isDark';

const RootContext = React.createContext();

const RootProvider = ({children}) => {
    const [state, setState] = React.useState('');

    return (
        <RootContext.Provider value={{state, setState}}>
            <IsDarkProvider>
            {children}
            </IsDarkProvider>
        </RootContext.Provider>
    );
}

export {RootContext, RootProvider}