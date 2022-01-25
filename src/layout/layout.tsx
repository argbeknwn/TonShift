import { Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/nav/nav';

const Layout = memo(() => {
  return (
    <Flex h="100vh" w="100vw" justifyContent={'center'}>
      <Grid templateRows={'1fr 9fr'} w={{ base: 'full', sm: '600px' }}>
        <GridItem>
          <Nav />
        </GridItem>
        <GridItem w="full">
          <Outlet />
        </GridItem>
      </Grid>
    </Flex>
  );
});

Layout.displayName = 'Layout';

export { Layout };
