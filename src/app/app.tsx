import { ChakraProvider, theme } from '@chakra-ui/react';
import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { NoMatchRoute } from '../routes/nomatch';
import { PoolRoute } from '../routes/pool';
import { PoolsRoute } from '../routes/pools';
import { SwapRoute } from '../routes/swap';

import '../i18n/i18n';
import { Swapper } from '../components/swapper/swapper';
import { Creator } from '../components/creator/creator';
import { PoolsList } from '../components/list/poolsList';

const App = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SwapRoute />} />
          <Route path="swap" element={<SwapRoute />} />
          <Route path="pools" element={<PoolsRoute />}>
            <Route index element={<PoolsList />} />
            <Route path="create" element={<Creator />} />
            <Route path="favorites" element={<Swapper />} />
            <Route path="*" element={<NoMatchRoute />} />
          </Route>
          <Route path="pool" element={<PoolRoute />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
});

export { App };
