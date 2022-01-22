import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Grid,
  Container,
} from '@chakra-ui/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '../switcher/themeSwitcher';
import { LanguageSwitcher } from '../switcher/languageSwitcher';

const Nav = memo(() => {
  const { t } = useTranslation();

  return (
    <Container h="full">
      <Grid alignContent={'center'} templateColumns="repeat(3, 1fr)" gap={4}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label={t('options')}
            icon={<HamburgerIcon />}
            variant="ghost"
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
        <LanguageSwitcher />
        <ThemeSwitcher />
      </Grid>
    </Container>
  );
});

Nav.displayName = 'Nav';

export { Nav };
