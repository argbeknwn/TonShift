import {
  NumberInput as NumberInputChakra,
  NumberInputField,
  useNumberInput,
} from '@chakra-ui/react';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useStoreon } from 'storeon/react';
import { simple_price } from '../../api/queries/queries';
import { deepGet } from '../../utils/deepGet';

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
