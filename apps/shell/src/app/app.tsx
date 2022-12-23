import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Callback } from './pages/Callback';
import { shouldLoginToSpotify, navigateToSpotify } from './app.utils';

const Shortcut = lazy(() => import('shortcut/Module'));

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
    <div className="min-h-screen flex">
      <Navigation />
      <div className="ml-[80px] w-full">
        <Header />
        <Suspense fallback={<p>Loading Shortcut app</p>}>
          <div className="p-4 bg-gradient-to-r from-[#1db954] to-[#191414] text-black">
            <Shortcut />
          </div>
        </Suspense>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
