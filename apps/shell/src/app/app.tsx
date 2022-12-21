import { Suspense, useEffect } from 'react';
import NxWelcome from './nx-welcome';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
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
    <div className="min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-black flex">
      <Navigation />
      <div className="ml-[80px] w-full">
        <Header />
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
