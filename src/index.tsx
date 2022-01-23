import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme'
import {MuiThemeProvider, CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from './store/store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <CssBaseline/>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);