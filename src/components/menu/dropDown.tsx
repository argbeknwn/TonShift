import { Menu, MenuButton, MenuList, Image, Button } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { coinsMock } from '../../mocks/coins';

import { Icon } from '../icon/icon';
import { PoolsList } from '../list/poolsList';

interface DropDownProps {
  items?: typeof coinsMock;
}

const DropDown = memo<DropDownProps>(({ items = coinsMock }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(items[0]);

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
                src={selected.image}
                alt={selected.name}
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
            {selected.symbol}
          </MenuButton>
          <MenuList height={'50vh'} width={{ base: '100vw', sm: 400 }}>
            <PoolsList handler={setSelected} onClose={onClose} />
          </MenuList>
        </>
      )}
    </Menu>
  );
});

DropDown.displayName = 'DropDown';

export { DropDown };
