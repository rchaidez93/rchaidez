import React from 'react';
import { DarkModeStateContext } from '../context/darkMode-context';

export function useDarkModeState(){
    const context = React.useContext(DarkModeStateContext);
    if(context === undefined){
        throw new Error("useDarkModeState must be used within a darkModeProvider")
    }
    return context;
}