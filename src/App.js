import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import JovanottiAppBar from './components/JovanottiAppBar';
import JovanottiTabs from './components/JovanottiTabs';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#616161',
      main: '#424242',
      dark: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4DB6AC',
      main: '#26A69A',
      dark: '#009688',
      contrastText: '#000',
    },
  },
});

class App extends Component {

  render() {

    return (

      <MuiThemeProvider theme={theme}>

        <CssBaseline />

        <JovanottiAppBar />

        <JovanottiTabs />

      </MuiThemeProvider>

    );
  }

}

export default App;
