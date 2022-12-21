import { Suspense, useEffect } from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import { Callback } from './pages/Callback';
import { shouldLoginToSpotify, navigateToSpotify } from './app.utils';

export const App = () => {
  const { pathname } = useLocation();
  const isInactiveSession = shouldLoginToSpotify(pathname);

  useEffect(() => {
    if (isInactiveSession) {
      navigateToSpotify();
    }
  }, [isInactiveSession]);

  if (isInactiveSession) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<NxWelcome title="home" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
