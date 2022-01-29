import { Input, useColorMode, Box, theme } from '@chakra-ui/react';
import { memo } from 'react';
import { DropDown } from '../menu/dropDown';
import { NumberInput } from './numberInput';

export interface InputAssetProps {
  id: 'input' | 'output';
}

const InputAsset = memo<InputAssetProps>(({ id }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      rounded={20}
      bgColor={`ton${colorMode}.input`}
      gap={4}
      display={'grid'}
      gridTemplateColumns={'1fr 2fr'}
      alignContent={'center'}
      p={{ base: 4, sm: 8 }}
      _focusWithin={{ boxShadow: theme.shadows.outline }}
      _hover={{ boxShadow: theme.shadows.outline }}
    >
      <DropDown id={id} />
      <NumberInput id={id} />
    </Box>
  );
});

Input.displayName = 'InputAsset';

export { InputAsset };
