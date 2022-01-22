import { Box, Grid } from '@chakra-ui/react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/nav/nav';

const Layout = memo(() => {
  return (
    <Grid templateRows={'1fr 9fr'} h="full" w="full" minH="100vh" p={2}>
      <Nav />
      <Grid>
        <Outlet />
      </Grid>
    </Grid>
  );
});

Layout.displayName = 'Layout';

export { Layout };
