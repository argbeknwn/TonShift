import React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';

import { Icon } from '../icon/icon';
import { useTranslation } from 'react-i18next';

type ThemeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue('dark', 'light');
  const { t } = useTranslation();

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={<Icon iconType={mode} />}
      aria-label={t(`${mode} theme`)}
      variant={'unstyled'}
      {...props}
    />
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';

export { ThemeSwitcher };
