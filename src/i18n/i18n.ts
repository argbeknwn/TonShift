import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/en.json';
import ru from './ru/ru.json';

export const defaultNS = 'translation';
export const resources = {
  en: { translation: en },
  ru: { translation: ru },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources,
});
