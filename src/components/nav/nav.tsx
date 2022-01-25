import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Grid,
  Container,
  useMediaQuery,
  Portal,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '../switcher/themeSwitcher';
import { LanguageSwitcher } from '../switcher/languageSwitcher';
import { NavRoutes } from './navRoutes';

const Nav = memo(() => {
  const { t } = useTranslation();
  const desktop = useBreakpointValue({ base: false, md: true });

  return (
    <Grid alignContent={'center'} templateColumns="repeat(4, 1fr)" gap={4} h="full" w="full">
      {desktop ? (
        <NavRoutes />
      ) : (
        <Portal>
          <Box pos={'absolute'} bottom={8} left={'50%'} transform={'translateX(-50%)'}>
            <NavRoutes />
          </Box>
        </Portal>
      )}
      <LanguageSwitcher />
      <ThemeSwitcher />

      <Menu>
        <MenuButton
          h="full"
          minH={8}
          as={IconButton}
          aria-label={t('options')}
          icon={<HamburgerIcon />}
        />
        <MenuList>
          <NavLink to={'swap'}>
            <MenuItem command="⌘T">{t('swap')}</MenuItem>
          </NavLink>
          <NavLink to={'pools'}>
            <MenuItem command="⌘N">{t('pools')}</MenuItem>
          </NavLink>
          <NavLink to={'pool'}>
            <MenuItem command="⌘⇧N">{t('pool')}</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
    </Grid>
  );
});

Nav.displayName = 'Nav';

export { Nav };
