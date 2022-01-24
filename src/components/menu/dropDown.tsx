import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { FixedSizeList } from 'react-window';
import { assetsMock } from '../../mocks/mocks';

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
            <FixedSizeList
              innerElementType={'ul'}
              itemData={assetsMock}
              itemCount={assetsMock.length}
              itemSize={20}
              height={400}
              width={200}
            >
              {({ data, index, style }: any) => {
                return (
                  <MenuItem style={style} onClick={() => setSelected(data[index])}>
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
function useResizeObserver<T>(): { ref: any; width?: 1 | undefined; height?: 1 | undefined } {
  throw new Error('Function not implemented.');
}
