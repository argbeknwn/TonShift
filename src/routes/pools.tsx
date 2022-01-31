import { Flex, GridItem, IconButton, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Content } from '../components/content/content';
import { Creator } from '../components/creator/creator';
import { DiamondImg } from '../components/icon/decor';
import { Icon } from '../components/icon/icon';

const PoolsRoute = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Content templateRows={'1fr 9fr'}>
      <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Flex gap={2} p={2} rounded={8}>
          <Creator />
        </Flex>
        <IconButton
          aria-label={t('favorites')}
          icon={<Icon iconType="star" />}
          color={`ton${colorMode}.accent`}
          variant={'unstyled'}
        />
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
