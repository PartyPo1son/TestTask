import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setNewsList } from '../slices/newsListSlice';

const axiosCall = () => axios('https://jsonplaceholder.typicode.com/posts');

function* fetchNewsListWorker() {
  try {
    const res = yield call(axiosCall);
    yield put(setNewsList(res.data));
  } catch (e) {
    yield put({ type: 'NEWSLIST_FETCH_FAILED', message: e.message });
  }
}
function* newsListSaga() {
  yield takeEvery('FETCH_NEWS_LIST', fetchNewsListWorker);
}

export default newsListSaga;
