import { Text } from '@chakra-ui/react';
import { memo } from 'react';

const NoMatchRoute = memo(() => {
  return <Text>{'NoMatchRoute'}</Text>;
});

NoMatchRoute.displayName = 'NoMatchRoute';

export { NoMatchRoute };
