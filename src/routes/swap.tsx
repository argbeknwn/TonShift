import { GridItem, Text, useColorModeValue } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';

const SwapRoute = memo(() => {
  const { t } = useTranslation();
  const bgGolor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Content templateRows={'1fr 6fr 3fr'}>
      <GridItem>
        <Text>{t('nav')}</Text>
      </GridItem>
      <GridItem bgColor={bgGolor}>
        <Text>{t('swap')}</Text>
      </GridItem>
      <GridItem />
    </Content>
  );
});

SwapRoute.displayName = 'SwapRoute';

export { SwapRoute };
