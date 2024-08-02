import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Login from './Login';
import Register from './Register';
import LOGO from "../images/logo.png"

function Menu() {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' },
  ];

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
        <img style={{width:"150px" , height:"autopx"}} src={LOGO}/>
          {menuItems.map((item) => (
            <Button  color="inherit" component={Link} to={item.path} key={item.path}>
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Menu;
