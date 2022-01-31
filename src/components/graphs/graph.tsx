import { useMemo, memo, useState, useEffect } from 'react';
import { AreaClosed, Bar } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleTime, scaleLinear } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import { max, extent, min } from 'd3-array';
import { Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import useResizeObserver from 'use-resize-observer';
import { useQuery } from 'react-query';
import { useStoreon } from 'storeon/react';

import { market_chart } from '../../api/queries/queries';
import { useTranslation } from 'react-i18next';

type GraphData = [string, number];

export const background = 'transparent';
export const background2 = 'transparent';
export const accentColor = '#0088CC';

// accessors
const getDate = ([date, _]: GraphData) => new Date(date);
const getStockValue = ([_, value]: GraphData) => value;

const graphMenu: ('total_volumes' | 'market_caps' | 'prices')[] = [
  'prices',
  'total_volumes',
  'market_caps',
];

export type AreaProps = {
  margin?: { top: number; right: number; bottom: number; left: number };
};

const Graph = memo(({ margin = { top: 0, right: 0, bottom: 0, left: 0 } }: AreaProps) => {
  const { pool } = useStoreon('pool');
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  const [input, output] = pool || [];

  const { data, isLoading, isError, refetch } = useQuery(
    'market_chart',
    () =>
      market_chart({
        id: input?.id || 'bitcoin',
        vs_currencies: output?.symbol || 'eth',
      }),
    { enabled: pool?.length > 0 }
  );

  useEffect(() => {
    refetch();
  }, [pool]);

  const [selected, setSelected] = useState(graphMenu[0]);
  const stock = useMemo(() => {
    if (!data || isLoading || isError) return [];
    if (!data[selected]) return [];

    return data[selected];
  }, [data, isLoading, isError, selected]);

  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // scales
  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [margin.left, innerWidth + margin.left],
        domain: extent(stock, getDate) as [Date, Date],
      }),
    [innerWidth, margin.left, stock]
  );
  const stockValueScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight + margin.top, margin.top],
        domain: [min(stock, getStockValue) || 0, max(stock, getStockValue) || 10],
        nice: true,
      }),
    [margin.top, innerHeight, stock]
  );

  if (!stock.length)
    return (
      <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
        Не поддерживается
      </Flex>
    );

  return (
    <>
      <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
        {graphMenu.map(btn => (
          <Button
            key={`graph-menu-${btn}`}
            onClick={() => setSelected(btn)}
            color={`ton${colorMode}.${btn === selected ? 'accent' : 'text'}`}
            textTransform={'capitalize'}
            variant={'unstyled'}
            _hover={{ boxShadow: 'none', color: `ton${colorMode}.accent` }}
            _focus={{ boxShadow: 'none' }}
            transition={'color 0.3s ease-in-out'}
          >
            {t(btn)}
          </Button>
        ))}
      </Flex>
      <Flex
        textTransform={'uppercase'}
        w={'full'}
        h={'full'}
        justifyContent={'space-between'}
        alignItems={'center'}
        ref={ref}
      >
        <svg width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="transparent" rx={14} />
          <LinearGradient id="area-gradient" from={accentColor} to={accentColor} toOpacity={0.35} />
          <GridRows
            left={margin.left}
            scale={stockValueScale}
            width={innerWidth}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0}
            pointerEvents="none"
          />
          <GridColumns
            top={margin.top}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.2}
            pointerEvents="none"
          />
          <AreaClosed<GraphData>
            data={stock}
            x={d => dateScale(getDate(d)) || 0}
            y={d => stockValueScale(getStockValue(d)) || 0}
            yScale={stockValueScale}
            strokeWidth={1}
            stroke="url(#area-gradient)"
            fill="url(#area-gradient)"
            curve={curveMonotoneX}
          />
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
          />
        </svg>
      </Flex>
    </>
  );
});

Graph.displayName = 'Graph';

export { Graph };
