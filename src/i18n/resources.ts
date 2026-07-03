import { arCommon } from '@/i18n/locales/ar/common'
import { arDashboard } from '@/i18n/locales/ar/dashboard'
import { arLogin } from '@/i18n/locales/ar/login'
import { enCommon } from '@/i18n/locales/en/common'
import { enDashboard } from '@/i18n/locales/en/dashboard'
import { enLogin } from '@/i18n/locales/en/login'

export const resources = {
  ar: {
    common: arCommon,
    dashboard: arDashboard,
    login: arLogin,
  },
  en: {
    common: enCommon,
    dashboard: enDashboard,
    login: enLogin,
  },
} as const
