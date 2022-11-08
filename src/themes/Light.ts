import { createTheme } from '@mui/material';

const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#007500',
      dark: '#007500',
      light: '#007500',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D1B000',
      dark: '#D1B000',
      light: '#D1B000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#d0d0d0',
      paper: '#ffffff',
    },
  },
});

export default LightTheme;
