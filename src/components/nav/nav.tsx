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
  useColorMode,
  Flex,
} from '@chakra-ui/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '../switcher/themeSwitcher';
import { LanguageSwitcher } from '../switcher/languageSwitcher';
import { NavRoutes } from './navRoutes';
import { Icon } from '../icon/icon';
import { Settings } from '../menu/settings';
import { ConnectBtn } from '../buttons/connectBtn';

const Nav = memo(() => {
  const { t } = useTranslation();
  const desktop = useBreakpointValue({ base: false, sm: true });
  const { colorMode } = useColorMode();

  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} gap={4} w="full">
      <NavLink to="/">
        <IconButton
          h={12}
          w={12}
          rounded={'50%'}
          bgColor={`ton${colorMode}.accent`}
          color={`ton${colorMode}.white`}
          variant={'solid'}
          aria-label={t('app')}
          icon={<Icon iconType="toncoin" />}
          _focus={{ boxShadow: 'none' }}
          _hover={{ bg: `ton${colorMode}.accent` }}
        />
      </NavLink>
      {desktop ? (
        <NavRoutes />
      ) : (
        <Portal>
          <Box pos={'absolute'} bottom={8} left={'50%'} transform={'translateX(-50%)'}>
            <NavRoutes />
          </Box>
        </Portal>
      )}
      <Flex alignItems={'center'}>
        <ConnectBtn
          fontSize={{ sm: 'xl' }}
          px={2}
          textTransform={'lowercase'}
          leftIcon={<Icon iconType="wallet" />}
          rightIcon={undefined}
        />
        <Settings>
          <MenuList>
            <LanguageSwitcher />
            <ThemeSwitcher />
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
        </Settings>
      </Flex>
    </Flex>
  );
});

Nav.displayName = 'Nav';

export { Nav };
