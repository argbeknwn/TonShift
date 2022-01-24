import {
  Button,
  Flex,
  GridItem,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';
import { Swapper } from '../components/swapper/swapper';
import { Settings } from '../components/menu/settings';
import { NavLink, Outlet } from 'react-router-dom';

const SwapRoute = memo(() => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Content templateRows={'1fr 6fr 3fr'}>
      <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Flex gap={2} p={2} rounded={8} bgColor={bgColor}>
          <Button>
            <Text>{t('swap')}</Text>
          </Button>
        </Flex>

        <Settings>
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
        </Settings>
      </GridItem>
      <GridItem bgColor={bgColor} rounded={16}>
        <Swapper />
      </GridItem>
      <GridItem />
    </Content>
  );
});

SwapRoute.displayName = 'SwapRoute';

export { SwapRoute };
