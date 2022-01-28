import { Text, Button, Flex, Grid, GridItem, Image, Box } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { FixedSizeList } from 'react-window';
import useResizeObserver from 'use-resize-observer';
import { coinsMock } from '../../mocks/coins';

interface PoolsListProps {
  handler?: Function;
  onClose?: Function;
  label?: 'input' | 'output';
}

const PoolsList = memo<PoolsListProps>(({ handler, onClose, label }) => {
  const { t } = useTranslation();
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { data, status, error } = useQuery<Coin[] | null, unknown, Coin[] | null, 'coins_markets'>(
    'coins_markets'
  );

  const handleClick = (item: Coin) => {
    handler && handler(item);
    onClose && onClose();
  };

  return (
    <Grid templateRows={'1fr 9fr'} h="full" gap={4} p={4}>
      <Grid alignContent={'center'} gridTemplateColumns={'1fr 4fr'}>
        <GridItem />
        <Grid
          justifyItems={'end'}
          gridTemplateColumns={'1fr 1fr 1fr'}
          gap={4}
          alignItems={'center'}
          pr={4}
        >
          <GridItem />
          <Text textTransform={'uppercase'}>Price</Text>
          <Text textTransform={'uppercase'}>Volume</Text>
        </Grid>
      </Grid>
      <GridItem ref={ref}>
        {data && (
          <FixedSizeList
            innerElementType={'ul'}
            itemData={data}
            itemCount={data.length}
            itemSize={56}
            height={height}
            width={'100%'}
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
                >
                  <Flex gap={4} alignItems={'center'}>
                    <Image
                      borderRadius="full"
                      boxSize={{ base: 4, sm: 8 }}
                      src={data[index].image}
                      alt={'image'}
                      fallbackSrc="https://via.placeholder.com/32"
                    />
                    <Text textTransform={'uppercase'}>{data[index].symbol}</Text>
                  </Flex>
                  <Grid
                    justifyItems={'end'}
                    gridTemplateColumns={'1fr 1fr 1fr'}
                    gap={4}
                    alignItems={'center'}
                  >
                    <Text textTransform={'uppercase'}></Text>
                    <Text textTransform={'uppercase'}>{data[index].current_price?.toFixed(2)}</Text>
                    <Text textTransform={'uppercase'}>{data[index].total_volume}</Text>
                  </Grid>
                </Grid>
              );
            }}
          </FixedSizeList>
        )}
      </GridItem>
    </Grid>
  );
});

PoolsList.displayName = 'PoolsList';
export { PoolsList };
