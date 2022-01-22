import { Menu, MenuButton, MenuList, MenuItem, Button, keyframes } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const assetsMock = [
  { id: 1, name: 'First', icon: 'First' },
  { id: 2, name: 'Second', icon: 'Second' },
  { id: 3, name: 'Third', icon: 'Third' },
];

interface DropDownProps {
  items?: typeof assetsMock;
}

const DropDown = memo<DropDownProps>(({ items = assetsMock }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(items[0]);

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={
              <ChevronDownIcon
                transition={'transform 0.3s ease-in-out'}
                transform={`rotate(${isOpen ? 180 : 0}deg)`}
              />
            }
            w="full"
          >
            {selected.name}
          </MenuButton>
          <MenuList>
            {items.map(item => {
              return (
                <MenuItem key={item.id} onClick={() => setSelected(item)}>
                  {item.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </>
      )}
    </Menu>
  );
});

DropDown.displayName = 'DropDown';

export { DropDown };
