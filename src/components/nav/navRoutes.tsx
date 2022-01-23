import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NavRoutes = memo(() => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('gray.300', 'gray.900');

  return (
    <Flex gap={2} p={2} rounded={4} bgColor={bgColor}>
      <NavLink to={'swap'}>
        <Button variant={'solid'} mr="-px">
          {t('swap')}
        </Button>
      </NavLink>
      <NavLink to={'pools'}>
        <Button variant={'solid'} mr="-px">
          {t('pools')}
        </Button>
      </NavLink>
    </Flex>
  );
});

NavRoutes.displayName = 'NavRoutes';

export { NavRoutes };
