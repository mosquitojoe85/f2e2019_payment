import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Payment from './routes/Payment';
import Success from './routes/Success';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#A8D574', contrastText: '#F0F0F0' },
    divider: { main: '#A8D574' }
  },
  typography: {
    // 告诉Material-UI html元素的字体大小是什么。
    htmlFontSize: 16,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/" exact component={Payment} />
      <Route path="/success" component={Success} />
    </Router>
  </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
