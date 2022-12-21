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
    <div className="min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[0] to-[#121212] flex">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="ml-[232px] w-full">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={<NxWelcome title="home" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
