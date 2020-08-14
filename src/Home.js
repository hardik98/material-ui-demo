import React from 'react';
import { ThemeProvider, Button, Drawer, Typography } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

const drawerWidth = 80;
const useStyles = makeStyles(() => ({
  root: {
    background: '#F8F9FA',
  },
  test: {
    display: 'flex'
  },
  drawer: {    
      width: drawerWidth,
      flexShrink: 0,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: '60px',
    marginLeft: drawerWidth,
  }
}));

export default function Home({ children, name="test" }) {
  
  const classes = useStyles();
  return (
    <div>
         <AppBar position="fixed" className={classes.appBar}>
          <Typography variant="h6" noWrap>
            {name}
          </Typography>
      </AppBar>
      <Drawer 
       classes={{
         paper: classes.root
       }}
      anchor='left' variant={'permanent'}>

        <Sidebar  />

      </Drawer>
      <main style={{margin: '100px'}}>{children}</main>
    </div>
  );
}
