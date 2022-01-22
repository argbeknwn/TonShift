import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';

const PoolsRoute = memo(() => {
  const { t } = useTranslation();

  return (
    <Content>
      <Text>{t('pools')}</Text>
    </Content>
  );
});

PoolsRoute.displayName = 'PoolsRoute';

export { PoolsRoute };
