import {
  Text,
  Flex,
  Grid,
  GridItem,
  Image,
  useColorMode,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { FixedSizeList } from 'react-window';
import useResizeObserver from 'use-resize-observer';

import tonCoinImg from '@/assets/icons/toncoin.svg';
import { wallets } from '../../constants/wallets';
import { Card } from '../card/card';
import { Icon } from '../icon/icon';

const PoolsList = memo(() => {
  const { t } = useTranslation();
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { colorMode } = useColorMode();
  const { data, isLoading, error } = useQuery<
    Coin[] | null,
    unknown,
    Coin[] | null,
    'coins_markets'
  >('coins_markets');
  const size = useBreakpointValue({ base: 'full', sm: 'sm' });
  const desktop = useBreakpointValue({ base: false, sm: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const variant: 'bottom' | 'right' | undefined = useBreakpointValue({
    base: 'bottom',
    sm: 'right',
  });

  const coins = useMemo(() => {
    if (!data || error || isLoading) return [];
    return data;
  }, [data]);

  const [selected, setSelected] = useState<Coin | null>(null);

  const handleClick = (coin: Coin) => {
    onOpen();
    setSelected(coin);
  };

  return (
    <Grid
      templateRows={{ base: '64px auto', sm: '82px auto' }}
      h="100%"
      gap={2}
      px={{ base: 0, sm: 4 }}
    >
      <Grid
        alignContent={'center'}
        gridTemplateColumns={'1fr 4fr'}
        px={{ base: 2, sm: 0 }}
        pr={'10px'}
      >
        <GridItem />
        <Grid
          justifyItems={'end'}
          gridTemplateColumns={{ base: '1fr', sm: '3fr 1fr 1fr' }}
          gap={4}
          alignItems={'center'}
          color={`ton${colorMode}.text`}
        >
          <Text textTransform={'uppercase'}>{t('name')}</Text>
          {desktop && (
            <>
              <Text textTransform={'uppercase'}>{t('price')}</Text>
              <Text textTransform={'uppercase'}>{t('volume')}</Text>
            </>
          )}
        </Grid>
      </Grid>
      <GridItem px={{ base: 2, sm: 0 }} ref={ref}>
        <FixedSizeList
          innerElementType={'ul'}
          itemData={coins}
          itemCount={coins.length}
          itemSize={56}
          height={height || 1}
          width={'full'}
        >
          {({ data, index, style }) => {
            return (
              <Grid
                alignContent={'center'}
                gridTemplateColumns={'1fr 4fr'}
                style={style}
                onClick={() => {
                  handleClick(data[index]);
                }}
                cursor={'pointer'}
                p={2}
                rounded={20}
                _hover={{ boxShadow: `inset 0 0 1px 0 grey`, color: `ton${colorMode}.accent` }}
                transition={'boxShadow 1s ease-in-out, color 0.3s ease-in-out'}
              >
                <Flex gap={4} alignItems={'center'}>
                  <Image
                    borderRadius="full"
                    boxSize={{ base: 4, sm: 8 }}
                    src={data[index].image}
                    alt={'image'}
                    fallbackSrc={tonCoinImg}
                    color={`ton${colorMode}.text`}
                  />
                  <Text textTransform={'uppercase'}>{data[index].symbol}</Text>
                </Flex>
                <Grid
                  justifyItems={'end'}
                  gridTemplateColumns={{ base: '1fr', sm: '3fr 1fr 1fr' }}
                  gap={4}
                  alignItems={'center'}
                >
                  <Text textTransform={'uppercase'}>{data[index].id}</Text>
                  {desktop && (
                    <>
                      <Text textTransform={'uppercase'}>
                        {data[index].current_price?.toFixed(2)}
                      </Text>
                      <Text textTransform={'uppercase'}>{data[index].total_volume}</Text>
                    </>
                  )}
                </Grid>
              </Grid>
            );
          }}
        </FixedSizeList>
      </GridItem>
      <Drawer placement={variant} size={size} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        {selected && (
          <DrawerContent
            h={{ base: '100vh' }}
            color={`ton${colorMode}.text`}
            bgGradient={{
              base: `linear(to-t, ton${colorMode}.gradientFrom, ton${colorMode}.gradientTo)`,
              sm: 'none',
            }}
            boxShadow={'none'}
            bg={'none'}
            p={4}
          >
            <Grid rounded={20} gridTemplateRows={'auto 8fr'} w={'full'} h={'full'} gap={1}>
              <DrawerHeader
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'start'}
                bgColor={`ton${colorMode}.box`}
                rounded={20}
              >
                <Image
                  borderRadius="full"
                  boxSize={{ base: 8, sm: 16 }}
                  src={selected.image}
                  alt={'image'}
                  fallbackSrc={tonCoinImg}
                  color={`ton${colorMode}.text`}
                />
                <Text>{selected.name}</Text>
                <IconButton
                  onClick={onClose}
                  aria-label={t('close wallet connect')}
                  icon={<Icon iconType="times" />}
                  variant={'unstyled'}
                />
              </DrawerHeader>
              <DrawerBody
                display={'grid'}
                p={0}
                gridTemplateRows={`repeat(2,1fr) repeat(2,2fr)`}
                gap={1}
              >
                <GridItem p={6} bgColor={`ton${colorMode}.box`} rounded={20}>
                  <Text>{selected.symbol}</Text>
                </GridItem>
                <Grid
                  gridTemplateRows={'repeat(3,1fr)'}
                  p={6}
                  bgColor={`ton${colorMode}.box`}
                  rounded={20}
                  textTransform={'uppercase'}
                >
                  <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Text>{t('price')}</Text>
                    <Text>{selected.current_price}</Text>
                  </Flex>
                  <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Text>{t('price_change_24h')}</Text>
                    <Text>{selected.price_change_24h}</Text>
                  </Flex>
                  <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Text>{t('market_cap')}</Text>
                    <Text>{selected.market_cap}</Text>
                  </Flex>
                </Grid>
                <GridItem p={6} bgColor={`ton${colorMode}.box`} rounded={20}>
                  <Text>{selected.symbol}</Text>
                </GridItem>
                <GridItem p={6} bgColor={`ton${colorMode}.box`} rounded={20}>
                  <Text>{selected.symbol}</Text>
                </GridItem>
              </DrawerBody>
            </Grid>
          </DrawerContent>
        )}
      </Drawer>
    </Grid>
  );
});

PoolsList.displayName = 'PoolsList';
export { PoolsList };
