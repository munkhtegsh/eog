import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeaderRaw from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import AvatarRaw from '@material-ui/core/Avatar';

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: 'white',
  },
});

const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const avatarStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: 'white',
  },
});
const Avatar = withStyles(avatarStyles)(AvatarRaw);

const styles = {
  card: {
    margin: '5% 20% 5% 30%',
    height: '70vh',
  },
};

const Dashboard = props => {
  const {classes} = props;
  return (
    <Card className={classes.card}>
      <CardHeader title="Dashboard" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="Temperature: " />
          </ListItem>
          <ListItem>
            <ListItemText primary="Latitude: " />
          </ListItem>
          <ListItem>
            <ListItemText primary="Longitude: " />
          </ListItem>
          <ListItem>
            <ListItemText primary="Submit Your App" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Dashboard);
