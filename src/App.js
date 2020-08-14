import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './theme/index';
import { ThemeProvider, Button, Drawer } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Routes from './Routes';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Home from './Home';



// Browser history
const browserHistory = createBrowserHistory();


function App() {
  return (
    <ThemeProvider theme={theme}>
         <Router history={browserHistory}>
          {/* <Home> */}
          <Routes />
          {/* </Home> */}
    </Router>
    </ThemeProvider>
  );
}

export default App;
