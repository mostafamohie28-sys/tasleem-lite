import { arCommon } from '@/i18n/locales/ar/common'
import { arCompany } from '@/i18n/locales/ar/company'
import { arDashboard } from '@/i18n/locales/ar/dashboard'
import { arLogin } from '@/i18n/locales/ar/login'
import { enCommon } from '@/i18n/locales/en/common'
import { enCompany } from '@/i18n/locales/en/company'
import { enDashboard } from '@/i18n/locales/en/dashboard'
import { enLogin } from '@/i18n/locales/en/login'

export const resources = {
  ar: {
    common: arCommon,
    company: arCompany,
    dashboard: arDashboard,
    login: arLogin,
  },
  en: {
    common: enCommon,
    company: enCompany,
    dashboard: enDashboard,
    login: enLogin,
  },
} as const
