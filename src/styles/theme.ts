import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  /* useSystemColorMode: false, */
};

const colors = {
  tonlight: {
    accent: '#0088CC',
    box: '#FFFFFF',
    input: '#F4F4F4',
    buttons: '#D1EEFC',
    textHover: '#272727',
    text: '#757C7F',
    empty: '#CECECE',
    gradientFrom: '#F0F1FF',
    gradientTo: '#D1EEFC',
    white: 'white',
    black: 'black',
    hidden: 'hidden',
  },
  tondark: {
    accent: '#0088CC',
    box: '#000C1C',
    input: '#18202D',
    buttons: '#242E3C',
    textHover: '#FFFFFF',
    text: '#757C7F',
    empty: '#CECECE',
    gradientFrom: '#042247',
    gradientTo: '#000C1C',
    white: 'white',
    black: 'black',
    hidden: 'hidden',
  },
};

const theme = extendTheme({ config, colors });

export { theme };
