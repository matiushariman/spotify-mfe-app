import '../styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { RecentlyPlayed } from './components/RecentlyPlayed';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecentlyPlayed />
    </QueryClientProvider>
  );
}

export default App;
