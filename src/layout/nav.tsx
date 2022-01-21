import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ThemeSwitcher } from '../components/themeSwitcher';

const Nav = memo(() => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
      <MenuList>
        <NavLink to={'swap'}>
          <MenuItem command="⌘T">{'Swap'}</MenuItem>
        </NavLink>
        <NavLink to={'pools'}>
          <MenuItem command="⌘N">{'pools'}</MenuItem>
        </NavLink>
        <NavLink to={'pool'}>
          <MenuItem command="⌘⇧N">{'pool'}</MenuItem>
        </NavLink>
      </MenuList>
      <ThemeSwitcher justifySelf="flex-end" />
    </Menu>
  );
});

Nav.displayName = 'Nav';

export { Nav };
