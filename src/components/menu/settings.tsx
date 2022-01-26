import { Menu, MenuButton, IconButton, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../icon/icon';

const Settings = memo(({ children }) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Menu closeOnSelect={false} isLazy={true}>
      {({ isOpen }) => {
        return (
          <>
            <MenuButton
              as={IconButton}
              aria-label={t('settings')}
              icon={
                <Icon
                  iconType="cog"
                  transformOrigin={'50% 50%'}
                  transition={'transform 0.3s ease-in-out'}
                  transform={`rotate(${isOpen ? 180 : 0}deg)`}
                />
              }
              variant="unstyled"
              color={`ton${colorMode}.accent`}
            />
            {children}
          </>
        );
      }}
    </Menu>
  );
});

Settings.displayName = 'Settings';

export { Settings };
