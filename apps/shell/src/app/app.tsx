import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Callback } from './pages/Callback';
import {
  shouldLoginToSpotify,
  navigateToSpotify,
  shouldDisplayApp,
} from './app.utils';

const Home = lazy(() => import('home/Module'));

export const App = () => {
  const { pathname } = useLocation();
  const isInactiveSession = shouldLoginToSpotify(pathname);
  const isAuthenticating = !shouldDisplayApp(pathname);

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
        {isAuthenticating && <Header />}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/callback" element={<Callback />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
