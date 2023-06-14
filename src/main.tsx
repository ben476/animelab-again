import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider, CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";
import { CssBaseline } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import theme from './theme';
import App from './App';
import './index.css';
import routes from './routes';

export const muiCache = createCache({
  "key": "mui",
  "prepend": true
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
);
