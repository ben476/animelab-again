import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#0fa',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#3b0087'
    },
    mode: 'dark'
  },
});

export default theme;
