import { createSlice } from '@reduxjs/toolkit';

export const newsListSlice = createSlice({
  name: 'newsList',
  initialState: [],
  reducers: {
    setNewsList: (state, action) => action.payload,
  },
});

export const { setNewsList } = newsListSlice.actions;

const fetchNewsList = () => ({ type: 'FETCH_NEWS_LIST' });

export default newsListSlice.reducer;

export { fetchNewsList };
