import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
// routing
import Routes from 'src/routes';
// defaultTheme
import themes from 'src/themes';
// project imports
import NavigationScroll from 'src/layout/NavigationScroll';


// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state: any) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
