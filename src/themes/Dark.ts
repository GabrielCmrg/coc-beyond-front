import { createTheme } from '@mui/material';

const DarkTheme = createTheme({
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
      default: '#202124',
      paper: '#303134',
    },
  },
});

export default DarkTheme;
