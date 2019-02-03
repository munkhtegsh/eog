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
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

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

class Chart extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const {
      classes,
      data,
      metric,
      latitude,
      longitude,
      lastReceived,
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title="Chart" style={{marginBottom: '2rem'}} />
        <ResponsiveContainer width="90%" height="80%">
          <LineChart width={730} height={250} data={data}>
            <Label
              value="Simple Drone Temperature"
              offset={2}
              position="Simple"
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis
              label={{value: 'Metrics', angle: -90, position: 'insideLeft'}}
            />
            <Tooltip
              viewBox={{x: 0, y: 0, width: 400, height: 400}}
              isAnimationActive={false}
            />
            <Line type="monotone" dataKey="metric" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}

const mapState = (state, ownProps) => ({
  loading: state.drone.loading,
  metric: state.drone.metric,
  latitude: state.drone.latitude,
  longitude: state.drone.longitude,
  lastReceived: state.drone.lastReceived,
  data: state.drone.data,
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
)(withStyles(styles)(Chart));
