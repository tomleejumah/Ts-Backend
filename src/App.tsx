import React from 'react';
import UserList from './components/UserList';
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        User Posts Overview
      </Typography>
      <UserList />
    </Container>
  );
};

export default App;

