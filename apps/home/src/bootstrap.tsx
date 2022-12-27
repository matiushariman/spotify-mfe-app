import './styles.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('home-root') as HTMLElement
);

root.render(
  <StrictMode>
    <div className="container mx-auto">
      <App />
    </div>
  </StrictMode>
);
