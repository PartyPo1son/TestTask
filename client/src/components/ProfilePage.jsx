import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

export default function ProfilePage() {
  const currentUser = useSelector((store) => store.currentUser);
  return (
    <Card sx={{ maxWidth: 700, maxHeight: 1360 }} style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
      <img
        style={{
          display: 'flex', justifyContent: 'center',
        }}
        src="/Garold.jpeg"
        alt="pic"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {currentUser.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Password:
          {currentUser.password}

        </Typography>
      </CardContent>

    </Card>
  );
}
