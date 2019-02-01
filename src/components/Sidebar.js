import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddLocation from '@material-ui/icons/AddLocation';
import DeviceUnknown from '@material-ui/icons/DeviceUnknown';
import ShowChart from '@material-ui/icons/ShowChart';
import Dashboard from '@material-ui/icons/Dashboard';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function Sidebar(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.toolbar} />
        <List>
          <ListItem button component={Link} to="/nowwhat">
            <ListItemIcon>
              <DeviceUnknown />
            </ListItemIcon>
            <ListItemText primary={'Now What'} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary={'Dashboard Visualization'} />
          </ListItem>
          <ListItem button component={Link} to="/showchart">
            <ListItemIcon>
              <ShowChart />
            </ListItemIcon>
            <ListItemText primary={'Chart Visualization'} />
          </ListItem>
          <ListItem button component={Link} to="/map">
            <ListItemIcon>
              <AddLocation />
            </ListItemIcon>
            <ListItemText primary={'Map Visualization'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
