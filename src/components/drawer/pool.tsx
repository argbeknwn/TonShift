import {
  useDisclosure,
  useColorMode,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Grid,
  DrawerHeader,
  Flex,
  AvatarGroup,
  Avatar,
  Text,
  Image,
  IconButton,
  Button,
  DrawerBody,
} from '@chakra-ui/react';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useStoreon } from 'storeon/react';
import { poolMock } from '../../mocks/pools';
import { Icon } from '../icon/icon';

import tonCoinImg from '@/assets/icons/toncoin.svg';
import { Graph } from '../graphs/graph';

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
            <DrawerBody display={'grid'} p={0} gridTemplateRows={`1fr 0.5fr 2fr auto`} gap={1}>
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
                {pool.map((coin: Coin, i: number) => (
                  <Grid
                    key={`coin-data-${i}`}
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
                    <Text>{`${coin.value}`}</Text>
                    <Text>{`${coin.market_cap}`}</Text>
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
                {poolMock.map(({ label, value }, i) => (
                  <Flex
                    key={`pool-data-${i}`}
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
              <Grid
                gridTemplateRows={'1fr 5fr'}
                p={6}
                bgColor={`ton${colorMode}.box`}
                rounded={20}
                gap={{ base: 1, sm: 2 }}
              >
                <Graph />
              </Grid>
            </DrawerBody>
          </Grid>
        </DrawerContent>
      )}
    </Drawer>
  );
});

PoolDrawer.displayName = 'PoolDrawer';

export { PoolDrawer };
