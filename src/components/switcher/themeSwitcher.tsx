import React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

type ThemeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);

  return (
    <IconButton
      h="full"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
