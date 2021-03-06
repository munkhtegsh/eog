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
import {ToastContainer} from 'react-toastify';

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
    const {classes, metric, latitude, longitude, lastReceived} = this.props;
    console.log(this.props);

    return this.props.metric ? (
      <Card className={classes.card}>
        <CardHeader title="Dashboard" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemText primary="Metric: " />
              <ListItemText secondary={metric} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Latitude: " />
              <ListItemText secondary={latitude} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Longitude: " />
              <ListItemText secondary={longitude} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Received" />
              <ListItemText secondary={lastReceived} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    ) : (
      <ToastContainer />
    );
  }
}

const mapState = (state, ownProps) => ({
  loading: state.drone.loading,
  metric: state.drone.metric,
  latitude: state.drone.latitude,
  longitude: state.drone.longitude,
  lastReceived: state.drone.lastReceived,
});

const mapDispatch = dispatch => ({
  onLoad: () =>
    dispatch({
      type: actions.FETCH_DRONE,
    }),
});

export default connect(
  mapState,
  mapDispatch,
)(withStyles(styles)(Dashboard));
