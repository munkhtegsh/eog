import WeatherSagas from './Weather';
import DroneSagas from './Drone';
import ApiErrors from './ApiErrors';

// export Sagas
export default [...ApiErrors, ...WeatherSagas, ...DroneSagas];
