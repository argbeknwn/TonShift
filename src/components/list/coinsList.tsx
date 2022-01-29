import { memo, useRef, useState, ChangeEvent, useMemo } from 'react';
import {
  Text,
  Flex,
  Grid,
  GridItem,
  Image,
  useColorMode,
  Modal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  ModalCloseButton,
  Input,
  theme,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { FixedSizeList } from 'react-window';
import useResizeObserver from 'use-resize-observer';
import tonCoinImg from '@/assets/icons/toncoin.svg';

interface PoolsListProps {
  handler?: Function;
  onClose: () => void;
  isOpen: boolean;
  label?: 'input' | 'output';
}

const find_by_symbol_name = (coins: Coin[], search: string) => {
  return coins.filter(
    coin => coin.symbol.toLowerCase().includes(search) || coin.id.includes(search)
  );
};

const CoinsList = memo<PoolsListProps>(({ handler, onClose, isOpen = true }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const size = useBreakpointValue({ base: 'full', sm: '2xl' });
  const desktop = useBreakpointValue({ base: false, sm: true });
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { data, isLoading, error } = useQuery<
    Coin[] | null,
    unknown,
    Coin[] | null,
    'coins_markets'
  >('coins_markets');

  const handleClick = (item: Coin) => {
    handler && handler(item);
    onClose && onClose();
  };

  const initialRef = useRef(null);

  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const coins = useMemo(() => {
    if (!data || error || isLoading) return [];
    if (!value) return data;

    return find_by_symbol_name(data, value.toLowerCase());
  }, [value, data]);

  return (
    <Modal initialFocusRef={initialRef} size={size} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        h={{ base: '100vh', sm: '75vh' }}
        w={{ base: 'full' }}
        color={`ton${colorMode}.text`}
        pb={{ base: 4, sm: 8 }}
      >
        <Grid
          templateRows={{ base: '64px 20px auto', sm: '82px 20px auto' }}
          h="100%"
          gap={2}
          px={{ base: 0, sm: 4 }}
        >
          <Input
            mb={{ base: 1, sm: 4 }}
            value={value}
            onChange={handleChange}
            ref={initialRef}
            placeholder={t('search')}
            variant={'unstyled'}
            rounded={'none'}
            px={8}
            pr={16}
            borderBottom={'1px'}
            borderColor={`ton${colorMode}.empty`}
          />
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
                    p={2}
                    rounded={20}
                    style={style}
                    onClick={() => {
                      handleClick(data[index]);
                    }}
                    cursor={'pointer'}
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
        </Grid>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
});

CoinsList.displayName = 'CoinsList';
export { CoinsList };
