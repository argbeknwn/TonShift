import { InputGroup, Input, InputLeftAddon, useColorModeValue } from '@chakra-ui/react';
import { memo } from 'react';
import { DropDown } from '../menu/dropDown';
import { SliderInput } from '../slider/sliderInput';

const InputAsset = memo(() => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <InputGroup
      rounded={8}
      bgColor={bgColor}
      gap={4}
      display={'grid'}
      gridTemplateColumns={'1fr 2fr'}
    >
      <InputLeftAddon>
        <DropDown />
      </InputLeftAddon>
      <SliderInput />
    </InputGroup>
  );
});

Input.displayName = 'InputAsset';

export { InputAsset };
