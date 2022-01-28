import { memo } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../queryClient';

const QueryProvider = memo(({ children }) => {
  return <QueryClientProvider client={queryClient} children={children} />;
});

export { QueryProvider };
