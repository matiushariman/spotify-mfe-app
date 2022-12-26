import '../styles.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecentlyPlayed } from './components/RecentlyPlayed';

export function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="grid gap-4">
        <RecentlyPlayed />
      </div>
    </QueryClientProvider>
  );
}

export default App;
