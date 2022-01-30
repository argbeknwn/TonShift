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
  AvatarGroup,
  Avatar,
  Button,
} from '@chakra-ui/react';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { FixedSizeList } from 'react-window';
import useResizeObserver from 'use-resize-observer';

import tonCoinImg from '@/assets/icons/toncoin.svg';
import { Icon } from '../icon/icon';
import { useStoreon } from 'storeon/react';
import { poolMock } from '../../mocks/pools';

const PoolDrawer = memo(() => {
  const { dispatch, pool } = useStoreon('pool');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const variant: 'bottom' | 'right' | undefined = useBreakpointValue({
    base: 'bottom',
    sm: 'right',
  });
  const size = useBreakpointValue({ base: 'full', sm: 'sm' });

  useEffect(() => {
    if (pool && !isOpen) return onOpen();
  }, [pool]);

  const handleClose = useCallback(() => {
    dispatch('selectPool');
    onClose();
  }, []);

  return (
    <Drawer placement={variant} size={size} onClose={handleClose} isOpen={isOpen}>
      <DrawerOverlay />
      {pool && (
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
              flexDirection={'column'}
              justifyContent={'space-between'}
              alignItems={'center'}
              bgColor={`ton${colorMode}.box`}
              rounded={20}
              gap={4}
            >
              <Flex gap={4} w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                <AvatarGroup size="md" max={2}>
                  <Avatar
                    borderRadius="full"
                    src={pool[0].image}
                    alt={'image'}
                    icon={<Icon iconType="toncoin" />}
                    color={`ton${colorMode}.text`}
                  />
                  <Avatar
                    borderRadius="full"
                    src={pool[1].image}
                    alt={'image'}
                    icon={<Icon iconType="toncoin" />}
                    color={`ton${colorMode}.text`}
                  />
                </AvatarGroup>
                <Text textTransform={'uppercase'}>{`${pool[0].symbol} / ${pool[1].symbol}`}</Text>
                <IconButton
                  onClick={onClose}
                  aria-label={t('close wallet connect')}
                  icon={<Icon iconType="times" />}
                  variant={'unstyled'}
                />
              </Flex>
              <Flex gap={4} w={'full'} justifyContent={'start'} alignItems={'center'}>
                <Button
                  size={'sm'}
                  rounded={20}
                  p={4}
                  bgColor={`ton${colorMode}.buttons`}
                  textTransform={'capitalize'}
                  fontSize={{ sm: 'lg' }}
                  color={`ton${colorMode}.white`}
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ bgColor: `ton${colorMode}.accent` }}
                  _active={{ bgColor: 'none' }}
                  transition={'background 0.3s ease-in-out ,color 0.3s ease-in-out'}
                >
                  {t('add liquidity')}
                </Button>
                <Button
                  size={'sm'}
                  rounded={20}
                  p={4}
                  bgColor={`ton${colorMode}.buttons`}
                  textTransform={'capitalize'}
                  fontSize={{ sm: 'lg' }}
                  color={`ton${colorMode}.white`}
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ bgColor: `ton${colorMode}.accent` }}
                  _active={{ bgColor: 'none' }}
                  transition={'background 0.3s ease-in-out ,color 0.3s ease-in-out'}
                >
                  {t('trade')}
                </Button>
              </Flex>
            </DrawerHeader>
            <DrawerBody display={'grid'} p={0} gridTemplateRows={`1fr 0.5fr repeat(2,2fr)`} gap={1}>
              <Grid
                gridTemplateRows={'repeat(3,1fr)'}
                p={6}
                bgColor={`ton${colorMode}.box`}
                rounded={20}
                gap={{ base: 1, sm: 2 }}
              >
                <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                  <Text textTransform={'capitalize'}>{t('tokens')}</Text>
                  <Text textTransform={'capitalize'}>{t('total locked')}</Text>
                </Flex>
                {pool.map((coin: Coin) => (
                  <Grid
                    w={'full'}
                    gridTemplateColumns={'40px 40px 2fr 2fr'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    justifyItems={'end'}
                    textTransform={'uppercase'}
                  >
                    <Image
                      justifySelf={'start'}
                      borderRadius="full"
                      boxSize={{ base: 4, sm: 8 }}
                      src={coin.image}
                      alt={'image'}
                      fallbackSrc={tonCoinImg}
                      color={`ton${colorMode}.text`}
                    />
                    <Text justifySelf={'start'}>{coin.symbol}</Text>
                    <Text>{coin.value}</Text>
                    <Text>{coin.market_cap}</Text>
                  </Grid>
                ))}
              </Grid>
              <Grid
                gridTemplateRows={'repeat(3,1fr)'}
                p={6}
                bgColor={`ton${colorMode}.box`}
                rounded={20}
                gap={{ base: 1, sm: 2 }}
              >
                {poolMock.map(({ label, value }) => (
                  <Flex
                    textTransform={'uppercase'}
                    w={'full'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Text>{t(label)}</Text>
                    <Text>{value}</Text>
                  </Flex>
                ))}
              </Grid>
            </DrawerBody>
          </Grid>
        </DrawerContent>
      )}
    </Drawer>
  );
});

const PoolsList = memo(() => {
  const { t } = useTranslation();
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { colorMode } = useColorMode();
  const desktop = useBreakpointValue({ base: false, sm: true });
  const { pools } = useStoreon('pools');
  const { dispatch } = useStoreon();
  const handleClick = (pos: number) => {
    dispatch('selectPool', pos);
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
          itemData={pools}
          itemCount={pools.length}
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
                  handleClick(index);
                }}
                cursor={'pointer'}
                p={2}
                rounded={20}
                _hover={{ boxShadow: `inset 0 0 1px 0 grey`, color: `ton${colorMode}.accent` }}
                transition={'boxShadow 1s ease-in-out, color 0.3s ease-in-out'}
              >
                <Flex gap={4} alignItems={'center'}>
                  <AvatarGroup size="md" max={2}>
                    <Avatar
                      borderRadius="full"
                      src={data[index][0].image}
                      alt={'image'}
                      icon={<Icon iconType="toncoin" />}
                    />
                    <Avatar
                      borderRadius="full"
                      src={data[index][1].image}
                      alt={'image'}
                      icon={<Icon iconType="toncoin" />}
                    />
                  </AvatarGroup>
                </Flex>
                <Grid
                  justifyItems={'end'}
                  gridTemplateColumns={{ base: '1fr', sm: '3fr 1fr 1fr' }}
                  gap={4}
                  alignItems={'center'}
                >
                  <Text
                    color={`ton${colorMode}.text`}
                    textTransform={'uppercase'}
                    fontWeight={'black'}
                  >
                    {`${data[index][0].symbol} / ${data[index][1].symbol}`}
                  </Text>
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
      <PoolDrawer />
    </Grid>
  );
});

PoolsList.displayName = 'PoolsList';
export { PoolsList };
