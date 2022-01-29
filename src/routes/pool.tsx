import { GridItem, Text, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';
import { DiamondImg } from '../components/icon/decor';

const PoolRoute = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Content>
      <GridItem pos={'relative'} bgColor={`ton${colorMode}.box`} rounded={16}>
        <DiamondImg />
        <Text>{t('pool')}</Text>
      </GridItem>
    </Content>
  );
});

PoolRoute.displayName = 'PoolRoute';

export { PoolRoute };
