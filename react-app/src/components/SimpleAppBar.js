import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './fonts.css';
import { background, secondary } from './colors.js';
import { makeStyles } from '@material-ui/core/styles';
import SimpleLogo from "./SimpleLogo";

const buttonTheme = {
  color: secondary,
  fontWeight: 'bold',
  fontFamily: 'Montserrat',
  fontSize: '0.75em',
  letterSpacing: '0.1em',
  marginBottom: '100px',
  marginRight: '20px', 
  display: 'block'
};
const firstLetter = { 
  fontSize: '1.3em' 
};

function SimpleAppBar() {
  return (
    <AppBar position="static" sx={{ background: background, boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
        
      <div style={{ flex: 0.15 }} /> 
      <SimpleLogo style={{ marginTop: '55px' }} /> 
        <div style={{ flex: 1 }} /> 
        <Button sx={{ ...buttonTheme, marginRight: '20px' }}>
          <span style={firstLetter}>C</span>ontact
        </Button>
        <Button sx={{ ...buttonTheme, marginRight: '20px' }}>
          <span style={firstLetter}>L</span>inks
        </Button>
        <Button sx={buttonTheme}>
          <span style={firstLetter}>R</span>esume
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleAppBar;
