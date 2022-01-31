import {
  IconButton,
  MenuList,
  Grid,
  Portal,
  Box,
  useBreakpointValue,
  useColorMode,
  Flex,
  Text,
  Button,
  Modal,
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
  const { setColorMode, colorMode } = useColorMode();
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
            <Flex
              id="testtext"
              flexDirection={'column'}
              bg={`ton${colorMode}.box`}
              p={4}
              borderRadius={20}
              gap={2}
              boxShadow={`0 0 15px 0 var(--chakra-colors-ton${colorMode}-shadow)`}
            >
              <Text textTransform={'capitalize'} p={4}>
                {t('settings')}
              </Text>
              <Grid
                as={Grid}
                display={'grid'}
                gridTemplateColumns={`1fr 1fr`}
                alignItems={'center'}
                px={4}
                py={1}
              >
                <Text textTransform={'capitalize'}>{t('mode')}</Text>
                <Grid rounded={20} gridTemplateColumns={`1fr 1fr`}>
                  <IconButton
                    onClick={() => setColorMode('light')}
                    icon={<Icon iconType={'light'} />}
                    aria-label={t(`light theme`)}
                    variant={'unstyled'}
                  />
                  <IconButton
                    onClick={() => setColorMode('dark')}
                    icon={<Icon iconType={'dark'} />}
                    aria-label={t(`dark theme`)}
                    variant={'unstyled'}
                  />
                </Grid>
              </Grid>
              <Grid
                as={Grid}
                display={'grid'}
                gridTemplateColumns={`1fr 1fr`}
                alignItems={'center'}
                px={4}
                py={1}
              >
                <Text textTransform={'capitalize'}>{t('language')}</Text>
                <Grid rounded={20} gridTemplateColumns={`1fr 1fr`}>
                  <Button
                    textTransform={'uppercase'}
                    variant="unstyled"
                    onClick={() => changeLanguage('ru')}
                    value="ru"
                  >
                    {t('ru')}
                  </Button>
                  <Button
                    textTransform={'uppercase'}
                    onClick={() => changeLanguage('en')}
                    value="en"
                    variant="unstyled"
                  >
                    {t('en')}
                  </Button>
                </Grid>
              </Grid>
            </Flex>
          </Settings>
        )}
      </Flex>
    </Grid>
  );
});

Nav.displayName = 'Nav';

export { Nav };
