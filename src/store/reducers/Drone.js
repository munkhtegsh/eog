import * as actions from '../actions';

const initialState = {
  loading: false,
  metric: '',
  latitude: null,
  longitude: null,
  lastReceived: '',
  data: {},
};

const startLoading = (state, action) => {
  return {...state, loading: true};
};

const droneDataReceived = (state, action) => {
  const {data} = action.data;
  const {metric, latitude, longitude, timestamp} = data[data.length - 1];

  let droneData = data.map(el => {
    let date = new Date(el.timestamp).toString();
    let dateFormat = date.split(' ')[4].slice(0, 5);
    el.timestamp = dateFormat;
    return el;
  });

  return {
    ...state,
    latitude: latitude,
    longitude: longitude,
    metric: metric,
    lastReceived: timestamp,
    data: data,
  };
};

const handlers = {
  [actions.FETCH_DRONE]: startLoading,
  [actions.DRONE_DATA_RECEIVED]: droneDataReceived,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === 'undefined') return state;
  return handler(state, action);
};
