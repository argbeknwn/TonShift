import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={changeLanguage}
      icon={<InfoIcon />}
      aria-label={t('switch language')}
    />
  );
};

LanguageSwitcher.displayName = 'LanguageSwitcher';

export { LanguageSwitcher };
