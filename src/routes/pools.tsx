import { StarIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  GridItem,
  IconButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import { Content } from '../components/content/content';
import { Settings } from '../components/menu/settings';
import { Swapper } from '../components/swapper/swapper';

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
      <GridItem bgColor={`ton${colorMode}.box`} rounded={16}>
        <Outlet />
      </GridItem>
    </Content>
  );
});

PoolsRoute.displayName = 'PoolsRoute';

export { PoolsRoute };
