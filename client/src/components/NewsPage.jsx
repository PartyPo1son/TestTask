import { Grid, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsList } from '../redux/slices/newsListSlice';
import NewsCard from './NewsCard';

export default function NewsPage() {
  const newsList = useSelector((store) => store.newsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsList());
  }, []);

  return (
    <>
      {newsList.map((el) => (
        <Grid key={el.id}>
          <Paper>
            <NewsCard oneNews={el} />
          </Paper>
        </Grid>
      ))}
    </>
  );
}
