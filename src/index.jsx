import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const THEME = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif`,
      fontSize: 12
    },
    // palette: {
    //   type: 'dark',
    //   primary: indigo,
    // }
  });


ReactDOM.render(
    <MuiThemeProvider theme={THEME}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();