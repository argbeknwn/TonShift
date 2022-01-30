import {
  Text,
  Flex,
  Grid,
  GridItem,
  useColorMode,
  useBreakpointValue,
  AvatarGroup,
  Avatar,
} from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { FixedSizeList } from 'react-window';
import useResizeObserver from 'use-resize-observer';

import { Icon } from '../icon/icon';
import { useStoreon } from 'storeon/react';
import { poolMock } from '../../mocks/pools';
import { PoolDrawer } from '../drawer/pool';

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
