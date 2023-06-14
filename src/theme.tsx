import { createTheme, experimental_extendTheme as extendTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = responsiveFontSizes(createTheme(
  {
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
    typography: {
      fontFamily: 'fieldwork, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "3.75rem"
      },
      h2: {
        fontWeight: 700
      },
      h3: {
        fontWeight: 700
      },
      h4: {
        fontWeight: 600
      },
      h5: {
        fontWeight: 600
      },
      h6: {
        fontWeight: 400
      },
      body1: {
        fontWeight: 300,
        fontSize: "1.2rem"
      },
      body2: {
        fontWeight: 300
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 30,
            backgroundColor: "#fff",
            ":hover": {
              backgroundColor: "#0fa",
              boxShadow: "0 0px 15px 0 #0fa"
            },
            color: "#333",
            padding: "0.4rem 1.2rem",
            textTransform: "none",
          }
        }
      }
    }
  }
), {
  factor: 4
})

export default theme;
