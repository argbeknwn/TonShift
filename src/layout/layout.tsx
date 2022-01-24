import { Flex, Grid } from '@chakra-ui/react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/nav/nav';

const Layout = memo(() => {
  return (
    <Flex h="100vh" w="100vw" justifyContent={'center'}>
      <Grid
        templateRows={'1fr 9fr'}
        h="full"
        w="full"
        maxW={{ base: '100%', md: '400px', xl: '800px' }}
      >
        <Nav />
        <Grid>
          <Outlet />
        </Grid>
      </Grid>
    </Flex>
  );
});

Layout.displayName = 'Layout';

export { Layout };
