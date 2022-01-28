import {
  Button,
  Grid,
  useColorMode,
  Text,
  IconButton,
  Flex,
  useDisclosure,
  theme,
} from '@chakra-ui/react';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useStoreon } from 'storeon/react';
import { simple_price } from '../../api/queries/queries';
import { deepGet } from '../../utils/deepGet';
import { ConnectBtn } from '../buttons/connectBtn';
import { Icon } from '../icon/icon';

import { InputAsset } from '../input/inputAsset';

const Swapper = memo(() => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const { dispatch, input, output, turnOver } = useStoreon('input', 'output', 'turnOver');
  const { data, status, error, refetch } = useQuery('simple_price', () =>
    simple_price({
      id: turnOver ? output.id : input.id,
      vs_currencies: turnOver ? input.symbol : output.symbol,
    })
  );

  useEffect(() => {
    refetch();
  }, [input, output, turnOver]);

  useEffect(() => {
    if (!input || !output || !data) return;

    const exchangeRate: number =
      deepGet(data, turnOver ? [output.id, input.symbol] : [input.id, output.symbol]) || 0;

    dispatch('setExchange', exchangeRate);
  }, [data]);

  const handleClick = () => dispatch('turnOver');

  return (
    <Grid p={{ base: '1rem', sm: '1.5rem' }} gap={4} bgColor={`ton${colorMode}.box`} rounded={20}>
      <Text color={`ton${colorMode}.text`} textTransform={'capitalize'}>
        {t('swap')}
      </Text>
      <Flex pos={'relative'} gap={4} flexDirection={'column'}>
        <InputAsset id="input" />
        <IconButton
          onClick={handleClick}
          w={8}
          rounded={'full'}
          color={`ton${colorMode}.text`}
          bgColor={`ton${colorMode}.buttons`}
          borderColor={`ton${colorMode}.buttons`}
          top={'50%'}
          right={'5%'}
          transform={`translate(-50%,-50%) rotate(${turnOver ? '0' : '180'}deg)`}
          transition={'transform 0.3s ease-in-out'}
          position={'absolute'}
          aria-label={t('turn over')}
          icon={<Icon iconType={'arrow'} />}
          boxShadow={theme.shadows.outline}
          variant={'unstyled'}
        />
        <InputAsset id="output" />
      </Flex>
      <ConnectBtn p={8} bgColor={`ton${colorMode}.buttons`} />
    </Grid>
  );
});

Swapper.displayName = 'Swapper';

export { Swapper };
