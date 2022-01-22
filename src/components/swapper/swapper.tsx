import { Button, Grid } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { InputAsset } from '../input/inputAsset';

const Swapper = memo(() => {
  const { t } = useTranslation();

  return (
    <Grid gap={4} p={4}>
      <InputAsset />
      <InputAsset />
      <Button>{t('connect wallet')}</Button>
    </Grid>
  );
});

Swapper.displayName = 'Swapper';

export { Swapper };
