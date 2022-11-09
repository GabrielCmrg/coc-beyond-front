import { useCallback, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';

import ThemeContext from '../contexts/ThemeContext';

import LightTheme from './Light';
import DarkTheme from './Dark';

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

function AppThemeProvider({ children }: IAppThemeProviderProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    return DarkTheme;
  }, [themeName]);

  const toggleTheme = useCallback(() => {
    setThemeName((oldValue) => (oldValue === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AppThemeProvider;
