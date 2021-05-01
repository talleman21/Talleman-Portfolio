import React from 'react';
import './App.css';
import Main from './components/Main'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
