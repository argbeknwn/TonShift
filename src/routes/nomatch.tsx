import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/content/content';

const NoMatchRoute = memo(() => {
  const { t } = useTranslation();

  return (
    <Content>
      <Text>{t('nomatch')}</Text>
    </Content>
  );
});

NoMatchRoute.displayName = 'NoMatchRoute';

export { NoMatchRoute };
