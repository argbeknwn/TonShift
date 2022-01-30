import { StarIcon } from '@chakra-ui/icons';
import { Button, Flex, GridItem, IconButton, Text, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import { Content } from '../components/content/content';
import { DiamondImg } from '../components/icon/decor';

const PoolsRoute = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Content templateRows={'1fr 9fr'}>
      <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Flex gap={2} p={2} rounded={8} bgColor={`ton${colorMode}.box`}>
          <NavLink to={'/pools'}>
            <Button>
              <Text>{t('pools')}</Text>
            </Button>
          </NavLink>
          <NavLink to={'create'}>
            {({ isActive }) => (
              <Button>
                <Text>{t(isActive ? 'add liquidity' : 'create')}</Text>
              </Button>
            )}
          </NavLink>
        </Flex>
        <NavLink to={'favorites'}>
          <IconButton aria-label={t('favorites')} icon={<StarIcon />} />
        </NavLink>
      </GridItem>
      <GridItem
        pos={'relative'}
        bgColor={`ton${colorMode}.box`}
        rounded={20}
        boxShadow={`0 0 15px 0 var(--chakra-colors-ton${colorMode}-shadow)`}
      >
        <DiamondImg />
        <Outlet />
      </GridItem>
    </Content>
  );
});

PoolsRoute.displayName = 'PoolsRoute';

export { PoolsRoute };
