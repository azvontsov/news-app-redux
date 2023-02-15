import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_LATEST_NEWS } from '../constants';
import { getLatestNews } from '../../api';
import { setLatestNews } from '../actions/actionCreator';

export function* workerSaga() {
  const { hits } = yield call(getLatestNews, 'redux');
  yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, workerSaga);
}

export default function* rootSaga() {
  //   console.log('This is root Saga');
  yield watchClickSaga();
}
