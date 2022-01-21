import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const PoolsRoute = memo(() => {
  const { t } = useTranslation();

  return <Text>{t('pools')}</Text>;
});

PoolsRoute.displayName = 'PoolsRoute';

export { PoolsRoute };
