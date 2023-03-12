import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NewsPage from './components/NewsPage';
import PrivateRouteLogin from './components/PrivateRouteLogin';
import PrivateRouteProfile from './components/PrivateRouteProfile';
import ProfilePage from './components/ProfilePage';
import { setCurrentUser } from './redux/slices/currentUserSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('user'))));
    }
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<PrivateRouteLogin><AuthPage /></PrivateRouteLogin>} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profile" element={<PrivateRouteProfile><ProfilePage /></PrivateRouteProfile>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
