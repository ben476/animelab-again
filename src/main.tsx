import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider, CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';
import './index.css';

export const muiCache = createCache({
  "key": "mui",
  "prepend": true
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
);
