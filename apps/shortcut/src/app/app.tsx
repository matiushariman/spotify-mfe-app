import '../styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RecentlyPlayed } from './components/RecentlyPlayed';
import { TopTracks } from './components/TopTracks';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid grid-cols-2 gap-4">
        <TopTracks />
        <RecentlyPlayed />
      </div>
    </QueryClientProvider>
  );
}

export default App;
