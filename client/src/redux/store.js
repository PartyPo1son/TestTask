import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import newsListSaga from './saga/newsList';
import setCurrentUserReducer from './slices/currentUserSlice';
import setNewsListReducer from './slices/newsListSlice';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    currentUser: setCurrentUserReducer,
    newsList: setNewsListReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(newsListSaga);
