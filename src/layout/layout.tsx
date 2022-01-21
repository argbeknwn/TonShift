import { Box, Grid } from '@chakra-ui/react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './nav';

const Layout = memo(() => {
  return (
    <Box h="full" w="full" textAlign="center" fontSize="xl">
      <Nav />
      <Grid>
        <Outlet />
      </Grid>
    </Box>
  );
});

Layout.displayName = 'Layout';

export { Layout };
