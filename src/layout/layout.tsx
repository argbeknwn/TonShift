import { Box, Grid, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeSwitcher } from '../components/themeSwitcher';
import { VITE_APP_NAME } from '../constants/enviroment';
import { Nav } from './nav';

const Layout = memo(() => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Nav />
      <Grid minH="100vh" p={3}>
        <Outlet />
      </Grid>
    </Box>
  );
});

Layout.displayName = 'Layout';

export { Layout };
