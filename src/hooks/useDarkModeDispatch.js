import React from 'react';
import { DarkModeDispatchContext } from '../context/darkMode-context';

export function useDarkModeDispatch(){
    const context = React.useContext(DarkModeDispatchContext);
    if(context === undefined){
        throw new Error("useDarkModeState must be used within a darkModeProvider")
    }
    return context;
}