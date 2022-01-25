import { Flex, useNumberInput, Button, HStack, Input } from '@chakra-ui/react';
import { memo } from 'react';

const NumberInput = memo(() => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 0.1,
    defaultValue: 1,
    min: 1,
    precision: 2,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    /*     <HStack>
      <Button display={{ sm: 'none' }} {...inc}>
        +
      </Button>
      <Input textAlign={'right'} {...input} />
      <Button display={{ sm: 'none' }} {...dec}>
        -
      </Button>
    </HStack> */
    <Input fontSize={{ sm: '2xl' }} textAlign={'right'} {...input} variant={'unstyled'} />
  );
});

NumberInput.displayName = 'NumberInput';

export { NumberInput };