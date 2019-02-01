import {takeEvery, call, put, cancel, all} from 'redux-saga/effects';
import API from '../api';
import * as actions from '../actions';

function delay(duration) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
}

function* watchDroneDataReceived(action) {
  while (true) {
    const {error, data} = yield call(API.getDroneData);
    if (error) {
      console.log({error});
      yield put({type: actions.API_ERROR, code: error.code});
      yield cancel();
      return;
    }
    yield put({type: actions.DRONE_DATA_RECEIVED, data: data});
    yield call(delay, 4000);
  }
}

function* watchAppLoad() {
  yield all([takeEvery(actions.FETCH_DRONE, watchDroneDataReceived)]);
}

export default [watchAppLoad];
