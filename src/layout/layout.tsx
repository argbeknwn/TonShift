import {
  Center,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/nav/nav';
import bg from '../assets/background/bg.svg';
import { Attribution } from '../components/attibution/attribution';

const Layout = memo(() => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      //bgGradient={`linear(to-t, ton${colorMode}.gradientFrom, ton${colorMode}.gradientTo)`}
      bgImage={`url(${bg}) ,linear-gradient(to top, var(--chakra-colors-ton${colorMode}-gradientFrom), var(--chakra-colors-ton${colorMode}-gradientTo))`}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
      h="100vh"
      w="100vw"
      justifyContent={'center'}
      p={2}
      overflow={'hidden'}
    >
      <Grid templateRows={'1fr 9fr'} w={{ base: 'full', sm: '800px' }}>
        <GridItem>
          <Nav />
        </GridItem>
        <GridItem justifySelf={'center'} w={{ base: 'full', sm: '600px' }}>
          <Outlet />
        </GridItem>
      </Grid>
      <Attribution />
    </Flex>
  );
});

Layout.displayName = 'Layout';

export { Layout };
