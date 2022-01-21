import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const SwapRoute = memo(() => {
  const { t } = useTranslation();

  return <Text>{t('swap')}</Text>;
});

SwapRoute.displayName = 'SwapRoute';

export { SwapRoute };
