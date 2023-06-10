import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
// routing
import Routes from 'src/routes';
// defaultTheme
import themes from 'src/themes';
// project imports
import NavigationScroll from 'src/layout/NavigationScroll';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// ==============================|| APP ||============================== //
export const MainContext = React.createContext<any>({});

const queryClient = new QueryClient()

const App = () => {
  const customization = useSelector((state: any) => state.customization);
  const [contextValue, setContextValue] = React.useState("Initial Value");

  return (
    <MainContext.Provider value={{ value: contextValue, setValue: setContextValue }}>
    <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
        </QueryClientProvider>
    </StyledEngineProvider>

    </MainContext.Provider>
  );
};

export default App;
