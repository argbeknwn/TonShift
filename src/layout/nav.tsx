import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '../components/themeSwitcher';
import { LanguageSwitcher } from '../components/languageSwitcher';

const Nav = memo(() => {
  const { t } = useTranslation();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label={t('options')}
        icon={<HamburgerIcon />}
        variant="outline"
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
      <LanguageSwitcher />
      <ThemeSwitcher />
    </Menu>
  );
});

Nav.displayName = 'Nav';

export { Nav };
