import { Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NavRoutes = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Flex gap={2} p={1} rounded={40} bgColor={`ton${colorMode}.box`}>
      <NavLink to={'swap'}>
        {({ isActive }) => (
          <Button
            bgColor={`ton${colorMode}.${isActive ? 'buttons' : 'hidden'}`}
            color={`ton${colorMode}.${isActive ? 'accent' : 'text'}`}
            rounded={20}
            variant={'solid'}
            mr="-px"
          >
            {t('swap')}
          </Button>
        )}
      </NavLink>
      <NavLink to={'pools'}>
        {({ isActive }) => (
          <Button
            bgColor={`ton${colorMode}.${isActive ? 'buttons' : 'hidden'}`}
            color={`ton${colorMode}.${isActive ? 'accent' : 'text'}`}
            rounded={20}
            variant={'solid'}
            mr="-px"
          >
            {t('pools')}
          </Button>
        )}
      </NavLink>
    </Flex>
  );
});

NavRoutes.displayName = 'NavRoutes';

export { NavRoutes };
