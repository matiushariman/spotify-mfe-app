import '../styles.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecentlyPlayed } from './components/RecentlyPlayed';
import { TopTracks } from './components/TopTracks';

export function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="grid gap-6">
        <RecentlyPlayed />
        <TopTracks />
      </div>
    </QueryClientProvider>
  );
}

export default App;
