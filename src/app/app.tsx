import { ChakraProvider, theme } from '@chakra-ui/react';
import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { NoMatchRoute } from '../routes/nomatch';
import { PoolRoute } from '../routes/pool';
import { PoolsRoute } from '../routes/pools';
import { SwapRoute } from '../routes/swap';

import '../i18n/i18n';

const App = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SwapRoute />} />
          <Route path="swap" element={<SwapRoute />} />
          <Route path="pools" element={<PoolsRoute />} />
          <Route path="pool" element={<PoolRoute />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
});

export { App };
