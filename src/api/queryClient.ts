import { QueryCache, QueryClient } from 'react-query';
import { persistWithIndexedDB } from './persistor';

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24 * 7,
    },
  },
});

persistWithIndexedDB(queryClient);

export { queryClient, queryCache };
