import { ChakraProvider, theme, Box, Text, Grid } from '@chakra-ui/react';
import { memo } from 'react';
import { ThemeSwitcher } from '../components/themeSwitcher';

const App = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ThemeSwitcher justifySelf="flex-end" />
          <Text>TonShift</Text>
        </Grid>
      </Box>
    </ChakraProvider>
  );
});

export { App };
