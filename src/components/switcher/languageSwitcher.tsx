import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={changeLanguage}
      aria-label={t('switch language')}
      variant="unstyled"
      value={i18n.language}
    >
      {i18n.language}
    </Button>
  );
};

LanguageSwitcher.displayName = 'LanguageSwitcher';

export { LanguageSwitcher };
