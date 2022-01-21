import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const PoolRoute = memo(() => {
  const { t } = useTranslation();

  return <Text>{t('pool')}</Text>;
});

PoolRoute.displayName = 'PoolRoute';

export { PoolRoute };
