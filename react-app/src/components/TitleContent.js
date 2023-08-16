import React from 'react';
import { secondary, titleTextColor, secondaryTextColor } from './colors.js';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  content: {
    fontFamily: 'Montserrat',
    display: 'block',
    marginTop: '7%',
    marginRight: '12%',
  },
  titleText: {
    textAlign: 'right',
    color: titleTextColor,
    fontWeight: 'bold',
    letterSpacing: '0.3em'
  },
  descrTextTheme: {
    textAlign: 'right',
    color: titleTextColor,
    fontWeight: '10',
    fontSize: '0.75em',
    letterSpacing: '0.15em',
    fontStyle: 'italic',
    fontSize: '2.75em',
  },
  whoamiTheme: {
    color: secondaryTextColor,
    fontFamily: 'Montserrat',
    fontSize: '1.85em',
    fontWeight: 'bold',
    display: 'block',
    alignItems: 'flex-start',
    marginLeft:'14%',
  },
  // add left to  move horizontally
  buttonClass:{
    color: 'green',
    fontFamily: 'Montserrat',
    fontSize: '1', 
    display: 'flex',
    position: 'absolute',
    top: '10px', 
    borderRadius: '5px',
    width: 'auto'
  },
  buttonStyle:{
    backgroundColor: "#21b6ae",
  }
}));

function TitleContent() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      
      <div className={classes.titleText}>
        <span style={{ fontSize: '4em' }}>E</span>
        <span style={{ fontSize: '3.5em' }}>AN  </span>
        <span style={{ fontSize: '4em' }}>V</span>
        <span style={{ fontSize: '3.5em' }}>ANDERGRAAF</span>
      </div>
      <div className={classes.descrTextTheme}>
        Software Engineer
      </div>
      <div className={classes.whoamiTheme} style={{  marginTop: "5%"}}>Programmer</div>
      <div className={classes.whoamiTheme}>Student</div>
      <div className={classes.whoamiTheme}>Sw[a]mmer</div>
      <div className={classes.whoamiTheme}>Dog Dad</div>                          
      
      {/* <Button className={classes.buttonClass}  style={{backgroundColor: "#21b6ae"}} variant="contained">About Me </Button> */}
    </div>
  );
}

export default TitleContent;
