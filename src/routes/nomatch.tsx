import { GridItem, Text, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';
import { DiamondImg } from '../components/icon/decor';

const NoMatchRoute = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Content>
      <GridItem pos={'relative'} bgColor={`ton${colorMode}.box`} rounded={16}>
        <DiamondImg />
        <Text>{t('nomatch')}</Text>
      </GridItem>
    </Content>
  );
});

NoMatchRoute.displayName = 'NoMatchRoute';

export { NoMatchRoute };
