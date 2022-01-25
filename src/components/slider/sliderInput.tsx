import {
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useMediaQuery,
} from '@chakra-ui/react';
import { memo, useState } from 'react';

const SliderInput = memo(() => {
  const [value, setValue] = useState(0);
  const handleChange = (value: number | string) => setValue(value as number);

  return (
    <Flex w="full" gap={4}>
      <Slider
        display={{ base: 'none', md: 'initial' }}
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" color={'current'} boxSize={4} children={value} />
      </Slider>
      <NumberInput w={'full'} value={value} onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
});

SliderInput.displayName = 'SliderInput';

export { SliderInput };
