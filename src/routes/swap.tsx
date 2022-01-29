import { GridItem, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';
import { DiamondImg } from '../components/icon/decor';
import { Swapper } from '../components/swapper/swapper';

const SwapRoute = memo(() => {
  return (
    <Content templateRows={'1fr 9fr'}>
      <GridItem display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        {/*         <Flex gap={2} p={2} rounded={20} bgColor={`ton${colorMode}.box`}>
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
        </Settings> */}
      </GridItem>
      <GridItem position={'relative'}>
        <DiamondImg />
        <Swapper />
      </GridItem>
    </Content>
  );
});

SwapRoute.displayName = 'SwapRoute';

export { SwapRoute };
