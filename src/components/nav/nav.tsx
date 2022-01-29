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
  Text,
  MenuGroup,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from '@chakra-ui/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '../switcher/themeSwitcher';
import { LanguageSwitcher } from '../switcher/languageSwitcher';
import { NavRoutes } from './navRoutes';
import { Icon } from '../icon/icon';
import { Settings } from '../menu/settings';
import { ConnectBtn } from '../buttons/connectBtn';

const Nav = memo(() => {
  const { t, i18n } = useTranslation();
  const desktop = useBreakpointValue({ base: false, sm: true });
  const { colorMode } = useColorMode();
  const changeLanguage = (lng: 'ru' | 'en') => {
    i18n.changeLanguage(lng);
  };

  return (
    <Grid
      gridTemplateColumns={{ base: '1fr 1fr', sm: '35% 30% 35%' }}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={4}
      w="full"
    >
      <NavLink to="/">
        <Flex alignItems={'center'} gap={4} fontWeight={'bold'} color={`ton${colorMode}.accent`}>
          <IconButton
            h={12}
            w={12}
            isRound
            bgColor={`ton${colorMode}.accent`}
            color={`ton${colorMode}.white`}
            variant={'solid'}
            aria-label={t('app')}
            icon={<Icon iconType="toncoin" />}
            _focus={{ boxShadow: 'none' }}
            _hover={{ bg: `ton${colorMode}.accent` }}
          />
          <Text display={{ base: 'none', sm: 'flex' }}>{t('app')}</Text>
        </Flex>
      </NavLink>
      {desktop ? (
        <Flex justifyContent={'center'}>
          <NavRoutes />
        </Flex>
      ) : (
        <Portal>
          <Box pos={'absolute'} bottom={8} left={'50%'} transform={'translateX(-50%)'}>
            <NavRoutes />
          </Box>
        </Portal>
      )}
      <Flex justifySelf={'end'} gap={4} alignItems={'center'} color={`ton${colorMode}.accent`}>
        <ConnectBtn
          fontSize={{ sm: 'lg' }}
          textTransform={'lowercase'}
          leftIcon={<Icon iconType="wallet" />}
          rightIcon={undefined}
          px={4}
        />
        {desktop && (
          <>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </>
        )}
        {!desktop && (
          <Settings>
            <MenuList w={{ base: '100vw', sm: '300px' }}>
              <MenuItem as={Grid} display={'grid'} gridTemplateColumns={`1fr 1fr`}>
                <Text>{t('language')}</Text>
                <Grid
                  rounded={20}
                  bgColor={`ton${colorMode}.empty`}
                  gridTemplateColumns={`1fr 1fr`}
                >
                  <MenuItem
                    as={Button}
                    variant="unstyled"
                    onClick={() => changeLanguage('ru')}
                    value="ru"
                  >
                    {t('ru')}
                  </MenuItem>
                  <MenuItem
                    as={Button}
                    onClick={() => changeLanguage('en')}
                    value="en"
                    variant="unstyled"
                  >
                    {t('en')}
                  </MenuItem>
                </Grid>
              </MenuItem>
              {/* <MenuOptionGroup defaultValue={i18n.language} title="Language" type="radio">
              <MenuItemOption as={Button} onClick={() => changeLanguage('ru')} value="ru">
                {t('ru')}
              </MenuItemOption>
              <MenuItemOption as={Button} onClick={() => changeLanguage('en')} value="en">
                {t('en')}
              </MenuItemOption>
            </MenuOptionGroup> */}
              <NavLink to={'swap'}>
                <MenuItem>{t('swap')}</MenuItem>
              </NavLink>
              <NavLink to={'pools'}>
                <MenuItem command="⌘N">{t('pools')}</MenuItem>
              </NavLink>
              <NavLink to={'pool'}>
                <MenuItem command="⌘⇧N">{t('pool')}</MenuItem>
              </NavLink>
            </MenuList>
          </Settings>
        )}
      </Flex>
    </Grid>
  );
});

Nav.displayName = 'Nav';

export { Nav };
