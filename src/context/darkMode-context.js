import React from 'react';
import darkModeReducer from '../reducer/darkModeReducer';

const DarkModeStateContext = React.createContext();
const DarkModeDispatchContext = React.createContext();

function DarkModeProvider ({children}) {
    const [state, dispatch] = React.useReducer(darkModeReducer, {darkMode: false});

    return (
        <DarkModeStateContext.Provider value={state}>
            <DarkModeDispatchContext.Provider value={dispatch}>
                {children}
            </DarkModeDispatchContext.Provider>
        </DarkModeStateContext.Provider>
    )
} 

export {DarkModeProvider, DarkModeDispatchContext, DarkModeStateContext}