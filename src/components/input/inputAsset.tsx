import { Input, useColorMode, Box } from '@chakra-ui/react';
import { memo } from 'react';
import { DropDown } from '../menu/dropDown';
import { NumberInput } from './numberInput';

const InputAsset = memo(() => {
  const { colorMode } = useColorMode();

  return (
    <Box
      rounded={20}
      bgColor={`ton${colorMode}.input`}
      gap={4}
      display={'grid'}
      gridTemplateColumns={'1fr 2fr'}
      alignContent={'center'}
      p={8}
    >
      <DropDown />
      <NumberInput />
    </Box>
  );
});

Input.displayName = 'InputAsset';

export { InputAsset };
