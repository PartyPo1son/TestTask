import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../redux/slices/currentUserSlice';

export default function AuthPage() {
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const [isCorrect, setIsCorrect] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authFunc = () => {
    if (inputs.username === 'Admin' && inputs.password === '12345') {
      dispatch(setCurrentUser(inputs));
      localStorage.setItem('user', JSON.stringify(inputs));
      navigate('/profile');
    } else setIsCorrect(false);
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
      <TextField
        autoFocus
        id="Username"
        label="Username"
        variant="outlined"
        value={inputs.username}
        onChange={(e) => setInputs((prev) => ({ ...prev, username: e.target.value }))}
      />
      <TextField
        id="Password"
        label="Password"
        variant="outlined"
        value={inputs.password}
        onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))}
      />
      <Button onClick={authFunc}>Авторизация</Button>
      {!isCorrect && (
        <h4>
          Имя пользователя или пароль введены неверно
        </h4>
      )}
    </Box>
  );
}
