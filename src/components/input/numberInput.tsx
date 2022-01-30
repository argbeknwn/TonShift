import { NumberInput as NumberInputChakra, NumberInputField } from '@chakra-ui/react';
import { memo } from 'react';
import { useStoreon } from 'storeon/react';

interface NumberInputProps {
  id: 'input' | 'output';
}

const NumberInput = memo<NumberInputProps>(({ id }) => {
  const { dispatch, [id]: coin } = useStoreon(id);

  const handleChange = (value: string) => {
    dispatch('setAsset', { id, value: { ...coin, value } });
  };

  return (
    <NumberInputChakra
      onChange={handleChange}
      value={coin?.value || 0}
      defaultValue={0}
      precision={0}
      step={0.1}
      min={0}
      size={'lg'}
    >
      <NumberInputField
        textAlign={'right'}
        border={'none'}
        boxShadow={'none'}
        _focus={{ boxShadow: 'none' }}
      />
    </NumberInputChakra>
  );
});

NumberInput.displayName = 'NumberInput';

export { NumberInput };
