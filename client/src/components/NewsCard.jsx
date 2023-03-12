import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

export default function NewsCard({ oneNews }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {oneNews.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneNews.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
