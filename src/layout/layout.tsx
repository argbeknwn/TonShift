import {
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/nav/nav';

const Layout = memo(() => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      bgGradient={`linear(to-t, ton${colorMode}.gradientFrom, ton${colorMode}.gradientTo)`}
      h="100vh"
      w="100vw"
      justifyContent={'center'}
      p={2}
    >
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
