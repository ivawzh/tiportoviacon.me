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
      light: '#1E88E5',
      main: '#1565C0',
      // dark: '#0D47A1',
      dark: '#1565C0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F4511E',
      main: '#D84315',
      dark: '#BF360C',
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
