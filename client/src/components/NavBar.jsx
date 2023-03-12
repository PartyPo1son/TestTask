import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { setCurrentUser } from '../redux/slices/currentUserSlice';

export default function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.currentUser);
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} color="inherit" to="/">Главная</Button>
          <Button component={Link} color="inherit" to="/news">Новости</Button>
          <Button component={Link} color="inherit" to="/profile">Профиль</Button>
          {user
          && (
          <Button
            component={Link}
            color="inherit"
            to="/login"
            onClick={() => {
              dispatch(setCurrentUser(null));
              localStorage.removeItem('user');
            }}
          >
            Выйти
          </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
