import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { IconButton } from '@material-ui/core';
import Elogo from "../images/Elogo.png";

export default function SimpleLogo() {
    const [imageLoadError, setImageLoadError] = useState(false);

    const handleImageError = (event) => {
      setImageLoadError(true);
      console.error('Error loading image:', event.target.src);
    };

    const circleStyle = {
        width: "100px ",
        height: "100px"
    }

  return (
    <IconButton>
        <Avatar alt="Ean" src={Elogo} onError={handleImageError} sx={circleStyle}></Avatar>
    </IconButton>

  )
}