import { InputGroup, Input, InputLeftAddon } from '@chakra-ui/react';
import { memo } from 'react';
import { DropDown } from '../menu/dropDown';
import { SliderInput } from '../slider/sliderInput';

const InputAsset = memo(() => {
  return (
    <InputGroup gap={4} display={'grid'} gridTemplateColumns={'1fr 2fr'}>
      <InputLeftAddon>
        <DropDown />
      </InputLeftAddon>
      <SliderInput />
    </InputGroup>
  );
});

Input.displayName = 'InputAsset';

export { InputAsset };
