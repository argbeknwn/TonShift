import { Menu, MenuButton, MenuList, MenuItem, Button, useBreakpointValue } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FixedSizeList } from 'react-window';
import { assetsMock } from '../../mocks/mocks';
import { Icon } from '../icon/icon';

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
            rightIcon={<Icon iconType="arrowDown" />}
            w="full"
            fontSize={{ sm: '2xl' }}
            variant="unstyled"
            _focus={{ boxShadow: 'none' }}
          >
            {selected.name}
          </MenuButton>
          <MenuList width={{ base: '100vw', sm: 400 }}>
            <FixedSizeList
              innerElementType={'ul'}
              itemData={assetsMock}
              itemCount={assetsMock.length}
              itemSize={36}
              height={400}
              width={'100%'}
            >
              {({ data, index, style }: any) => {
                return (
                  <MenuItem h={36} style={style} onClick={() => setSelected(data[index])}>
                    {data[index].name}
                  </MenuItem>
                );
              }}
            </FixedSizeList>
          </MenuList>
        </>
      )}
    </Menu>
  );
});

DropDown.displayName = 'DropDown';

export { DropDown };
