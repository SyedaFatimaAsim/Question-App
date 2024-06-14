import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import AppRoute from './config/appRouter';

function App() {
  return (
    <Box
      sx={{ backgroundColor: "#e3d5ca", height: "100%", minHeight: "100vh" }}
    >
      <AppRoute />
    </Box>
  );
}

export default App;
