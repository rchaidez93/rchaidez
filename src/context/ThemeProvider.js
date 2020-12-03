import React from 'react';
import { createMuiTheme, ThemeProvider as MyThemeProvider } from '@material-ui/core';
import { useDarkModeState } from '../hooks/useDarkModeState';

const ThemeProvider = ({children}) => {
     const {darkMode} = useDarkModeState();
     console.log(darkMode);
    const myTheme = React.useMemo(
        () =>
            createMuiTheme({
            palette: {
                type: darkMode ? 'dark' : 'light',
            },
            }),
        [darkMode],
    );

    return (
        <MyThemeProvider theme={myTheme}>
            {children}
        </MyThemeProvider>
    )
}

export default ThemeProvider;