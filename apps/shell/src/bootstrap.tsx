import './styles.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
