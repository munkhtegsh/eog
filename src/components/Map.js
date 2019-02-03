import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeaderRaw from '@material-ui/core/CardHeader';
import {withStyles} from '@material-ui/core/styles';
import AvatarRaw from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import ReactMapGL, {Marker} from 'react-map-gl';

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: 'white',
  },
});

const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    margin: '5% 20% 5% 30%',
    height: '70vh',
  },
};

class Map extends Component {
  state = {
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
    },
  };

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
    let viewPort = {latitude, longitude};
    console.log(viewPort);

    return (
      <div>
        {latitude ? (
          <Card className={classes.card}>
            <CardHeader title="Chart" />
            <ReactMapGL
              width="100%"
              height="100%"
              zoom={10}
              mapboxApiAccessToken={process.env.REACT_APP_SECRET_CODE}
              {...viewPort}
              onViewportChange={viewport => this.setState({viewport})}>
              <Marker
                latitude={latitude}
                longitude={longitude}
                offsetLeft={-20}
                offsetTop={-10}>
                <div> DRONE </div>
              </Marker>
            </ReactMapGL>
          </Card>
        ) : null}
      </div>
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
)(withStyles(styles)(Map));
