import { Button, Grid, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../icon/icon';
import { InputAsset } from '../input/inputAsset';

const Swapper = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Grid p={{ base: '1rem', sm: '1.5rem' }} gap={4} bgColor={`ton${colorMode}.box`} rounded={20}>
      <InputAsset />
      <InputAsset />
      <Button
        rounded={20}
        p={8}
        textTransform={'capitalize'}
        fontSize={{ sm: '2xl' }}
        rightIcon={<Icon iconType="wallet" />}
        bgColor={`ton${colorMode}.buttons`}
        color={`ton${colorMode}.accent`}
      >
        {t('connect')}
      </Button>
    </Grid>
  );
});

Swapper.displayName = 'Swapper';

export { Swapper };
