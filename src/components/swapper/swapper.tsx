import { Button, Grid, useColorMode, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ConnectBtn } from '../buttons/connectBtn';

import { InputAsset } from '../input/inputAsset';

const Swapper = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Grid p={{ base: '1rem', sm: '1.5rem' }} gap={4} bgColor={`ton${colorMode}.box`} rounded={20}>
      <Text color={`ton${colorMode}.text`} textTransform={'capitalize'}>
        {t('swap')}
      </Text>
      <InputAsset id="input" />
      <InputAsset id="output" />
      <ConnectBtn p={8} bgColor={`ton${colorMode}.buttons`} />
    </Grid>
  );
});

Swapper.displayName = 'Swapper';

export { Swapper };
