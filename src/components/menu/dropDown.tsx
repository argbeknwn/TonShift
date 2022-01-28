import { Menu, MenuButton, MenuList, Image, Button } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStoreon } from 'storeon/react';

import { coinsMock } from '../../mocks/coins';

import { Icon } from '../icon/icon';
import { PoolsList } from '../list/poolsList';

interface DropDownProps {
  id: 'input' | 'output';
}

const DropDown = memo<DropDownProps>(({ id }) => {
  const { t } = useTranslation();

  const { dispatch, [id]: data } = useStoreon(id);

  const handleSelect = useCallback((value: Coin) => {
    dispatch('setAsset', { id, value });
  }, []);

  return (
    <Menu isLazy>
      {({ isOpen, onClose }) => (
        <>
          <MenuButton
            isActive={isOpen}
            display={'grid'}
            alignContent={'center'}
            gridTemplateColumns={'1fr 1fr 1fr'}
            as={Button}
            leftIcon={
              <Image
                borderRadius="full"
                boxSize={{ base: 4, sm: 8 }}
                src={data?.image}
                alt={data?.name}
                fallbackSrc="https://via.placeholder.com/32"
              />
            }
            rightIcon={<Icon iconType="arrowDown" />}
            w="full"
            fontSize={{ sm: '2xl' }}
            variant="unstyled"
            _focus={{ boxShadow: 'none' }}
            textTransform={'uppercase'}
          >
            {data?.symbol}
          </MenuButton>
          <MenuList height={'50vh'} width={{ base: '100vw', sm: 400 }}>
            <PoolsList handler={handleSelect} onClose={onClose} />
          </MenuList>
        </>
      )}
    </Menu>
  );
});

DropDown.displayName = 'DropDown';

export { DropDown };
