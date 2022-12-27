import '../styles.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecentlyPlayed } from './components/RecentlyPlayed';
import { TopTracks } from './components/TopTracks';
import { FollowedArtists } from './components/FollowedArtists';

export function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="grid gap-6">
        <FollowedArtists />
        <div className="container mx-auto">
          <RecentlyPlayed />
        </div>
        <div className="container mx-auto">
          <TopTracks />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
