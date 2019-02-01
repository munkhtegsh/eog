import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeaderRaw from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import AvatarRaw from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import * as actions from '../store/actions';

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

class Dashboard extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {classes} = this.props;
    console.log(this.props);
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
  }
}

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE,
    }),
});

export default connect(
  null,
  mapDispatch,
)(withStyles(styles)(Dashboard));
