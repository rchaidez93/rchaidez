import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './context/ThemeProvider';
import { CssBaseline } from '@material-ui/core';
import ProfilePage from './pages/ProfilePage';
import { DarkModeProvider } from './context/darkMode-context';

function App () {
  return (
    <DarkModeProvider>
      <ThemeProvider>
        <CssBaseline />
        <ProfilePage />
      </ThemeProvider>
    </DarkModeProvider>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);