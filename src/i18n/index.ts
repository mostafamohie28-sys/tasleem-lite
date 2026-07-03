import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { resources } from '@/i18n/resources'

export function getLanguageDirection(language: string) {
  return language.startsWith('ar') ? 'rtl' : 'ltr'
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',
  fallbackLng: 'ar',
  defaultNS: 'common',
  ns: ['common', 'login', 'dashboard', 'company'],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
