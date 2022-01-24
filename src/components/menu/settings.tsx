import { Menu, MenuButton, IconButton } from '@chakra-ui/react';
import { memo } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { Icon } from '../icon/icon';

const Settings = memo(({ children }) => {
  const { t } = useTranslation();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label={t('settings')}
        icon={<Icon iconType="cog" />}
        variant="ghost"
      />
      {children}
    </Menu>
  );
});

Settings.displayName = 'Settings';

export { Settings };
