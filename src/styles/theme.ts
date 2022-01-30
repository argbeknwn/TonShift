import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  /* useSystemColorMode: false, */
};

export const colors = {
  tonlight: {
    accent: '#0088CC',
    box: '#F3FBFE',
    input: '#FFFFFF',
    buttons: '#B7E2FF',
    textHover: '#303757',
    text: 'rgba(48, 55, 87, 0.6)',
    empty: 'rgba(48, 55, 87, 0.15)',
    gradientFrom: '#E8F7FE',
    gradientTo: '#C0E8FC',
    white: 'white',
    black: 'black',
    hidden: 'hidden',
    shadow: 'rgb(0 136 204 / 15%)',
  },
  tondark: {
    accent: '#0088CC',
    box: '#303757',
    input: '#4F5570',
    buttons: '#2C4F92',
    textHover: '#FFFFFF',
    text: 'rgba(255, 255, 255, 0.6)',
    empty: 'rgba(255, 255, 255, 0.15)',
    gradientFrom: '#212A57',
    gradientTo: '#0E1335',
    white: 'white',
    black: 'black',
    hidden: 'hidden',
    shadow: '#0E1335',
  },
};

const theme = extendTheme({ config, colors });

export { theme };
