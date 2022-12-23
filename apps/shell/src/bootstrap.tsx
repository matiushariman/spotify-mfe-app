import './styles.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient, QueryCache } from 'react-query';

import App from './app/app';
import { handleApiError } from './app/utils/apiUtils';

import type { ApiErrorResponse } from '@spotify-mfe-app/api-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider
        client={
          new QueryClient({
            queryCache: new QueryCache({
              onError: (err) => handleApiError(err as ApiErrorResponse),
            }),
          })
        }
      >
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
