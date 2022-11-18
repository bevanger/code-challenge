import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CustomList from './Components/CustomList';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CustomList/>}/>
        </Routes>
      </Router>
      <AppBar
        position='fixed'
        style={{
          backgroundColor: 'blue',
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap>
            My List Of Stuff
          </Typography>
        </Toolbar>
      </AppBar>       
    </div>
  );
}
