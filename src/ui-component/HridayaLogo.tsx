// material-ui
import { useTheme } from '@mui/material/styles';
import React from 'react';
import hridayaTransparentLogo from 'src/assets/images/hridayaTransparent.png';

// ==============================|| LOGO SVG ||============================== //

const HridayaLogo = () => {
    const theme: any = useTheme();

    return (
        <img src={hridayaTransparentLogo} alt="atreya" style={{ height: 50, width: 120 }} />
    );
};

export default HridayaLogo;
