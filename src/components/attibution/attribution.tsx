import { memo } from 'react';
import { Image, Link, Text } from '@chakra-ui/react';

import img from '@/assets/images/coingecko.svg';

const Attribution = memo(() => {
  return (
    <Link
      display={'flex'}
      alignItems={'center'}
      gap={4}
      pos={'absolute'}
      right={8}
      bottom={8}
      href="https://www.coingecko.com/api"
      isExternal
    >
      <Text display={{ base: 'none', sm: 'flex' }}>CoinGecko</Text>
      <Image borderRadius="full" boxSize={{ base: 4, sm: 8 }} src={img} alt={'image'} />
    </Link>
  );
});

Attribution.displayName = 'Attribution';

export { Attribution };
