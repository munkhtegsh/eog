import * as actions from '../actions';

const initialState = {
  loading: false,
  temperature: '',
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
  console.log(metric, latitude, longitude, timestamp);
  return {
    ...state,
    latitude: latitude,
    longitude: longitude,
    temperature: metric,
    lastReceived: timestamp,
    data: action.data,
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
