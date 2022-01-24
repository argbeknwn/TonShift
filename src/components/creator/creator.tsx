import { Button, Grid } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Creator = memo(() => {
  const { t } = useTranslation();

  return (
    <Grid gap={4} p={4}>
      <Button>{t('connect wallet')}</Button>
    </Grid>
  );
});

Creator.displayName = 'Creator';

export { Creator };
