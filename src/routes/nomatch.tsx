import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const NoMatchRoute = memo(() => {
  const { t } = useTranslation();

  return <Text>{t('nomatch')}</Text>;
});

NoMatchRoute.displayName = 'NoMatchRoute';

export { NoMatchRoute };
