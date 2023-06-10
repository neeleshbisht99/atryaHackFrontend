// material-ui
import { useTheme } from '@mui/material/styles';
import React from 'react';
import logo from 'src/assets/images/logo.svg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme: any = useTheme();

  return (
    <img src={logo} alt="atreya" style={{ height: 50, width: 150 }} />
  );
};

export default Logo;
