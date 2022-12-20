import { Suspense } from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => (
  <Suspense fallback={null}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<NxWelcome title="shell" />} />
    </Routes>
  </Suspense>
);

export default App;
