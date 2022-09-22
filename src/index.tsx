import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <App />
      </StyledEngineProvider>
  </React.StrictMode>
);
