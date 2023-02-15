import { takeEvery, put, call, fork } from '@redux-saga/core/effects';
import { GET_NEWS } from '../constants';
import { setLatestNews, setPopularNews } from '../actions/actionCreator';
import { getLatestNews, getPopularNews } from '../../api';

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'redux');
  yield put(setLatestNews(hits));
}

export function* handlePopularNews() {
  const { hits } = yield call(getPopularNews);
  yield put(setPopularNews(hits));
}

export function* workerSaga() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, workerSaga);
}

export default function* rootSaga() {
  //   console.log('This is root Saga');
  yield watchClickSaga();
}
