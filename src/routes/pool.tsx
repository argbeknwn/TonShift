import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';

const PoolRoute = memo(() => {
  const { t } = useTranslation();

  return (
    <Content>
      <Text>{t('pool')}</Text>
    </Content>
  );
});

PoolRoute.displayName = 'PoolRoute';

export { PoolRoute };
