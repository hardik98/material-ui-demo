import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import logo from 'assets/icon.png';
import { withStyles, Grid } from '@material-ui/core';
import { List, ListItem, ListItemIcon } from '@material-ui/core';

import {
  Delete as DeleteIcon,
  InsertDriveFile as DriveIcon,
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  Home as HomeIcon,
} from '@material-ui/icons';

// Component styles
import styles from './styles';

function Sidebar({classes}) {
    const rootClassName = classes.root;
    return (
      <nav className={rootClassName}>
        <Grid
          className={rootClassName}
          container
          direction='column'
          justify='space-between'
        >
          <Grid item>
            <List disablePadding>
              <ListItem
                className={classes.listItem}
                component={NavLink}
                isActive={(match, location) => {
                 return true;
                }
              }
                to='/users'
              >
                <img
                  src={logo}
                  alt='Visit the MDN site'
                  style={{ height: '40px', width: '40px' }}
                ></img>
              </ListItem>
              <ListItem
                 className={classes.listItem}
                component={NavLink}
                to='/home'
                activeClassName={classes.activeListItem}
              >
                <HomeIcon color={'primary'} />
              </ListItem>
              <ListItem
                className={classes.listItem}
                component={NavLink}
                activeClassName={classes.activeListItem}
                to='/upload'
              >
                <DriveIcon color={'primary'} />
              </ListItem>
              <ListItem
                className={classes.listItem}
                component={NavLink}
                activeClassName={classes.activeListItem}
                to='/docs'
              >
                <SvgIcon color={'primary'} viewBox='0 0 25.2 28'>
                  <path
                    className='a'
                    d='M25.4,3.8H19.548a4.183,4.183,0,0,0-7.9,0H5.8A2.808,2.808,0,0,0,3,6.6V26.2A2.808,2.808,0,0,0,5.8,29H25.4a2.808,2.808,0,0,0,2.8-2.8V6.6a2.808,2.808,0,0,0-2.8-2.8m-16.8,7h2.8v5.6H10V12.2H8.6V10.8m4.2,12.6v1.4H8.6V23.512L11.4,20.6H8.6V19.2h3.15a1.058,1.058,0,0,1,1.05,1.05,1.038,1.038,0,0,1-.294.728L10.168,23.4H12.8M14.2,5.2a1.4,1.4,0,1,1,1.4,1.4,1.4,1.4,0,0,1-1.4-1.4m8.4,18.2h-7V20.6h7v2.8m0-8.4h-7V12.2h7Z'
                    transform='translate(-3 -1)'
                  />
                </SvgIcon>
              </ListItem>
              <ListItem
                className={classes.listItem}
                component={NavLink}
                activeClassName={classes.activeListItem}
                to='/statastic'
              >
                <PeopleIcon color='primary' />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <List>
              <ListItem
                className={classes.listItem}
                component={NavLink}
                to='/settings'
                activeClassName={classes.activeListItem}
              >
                <DeleteIcon color='primary' />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </nav>
    );
  } 


export default withStyles(styles)(Sidebar);
