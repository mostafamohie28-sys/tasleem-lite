import { arCommon } from '@/i18n/locales/ar/common'
import { arCompany } from '@/i18n/locales/ar/company'
import { arCouriers } from '@/i18n/locales/ar/couriers'
import { arDashboard } from '@/i18n/locales/ar/dashboard'
import { arLogin } from '@/i18n/locales/ar/login'
import { arSenders } from '@/i18n/locales/ar/senders'
import { enCommon } from '@/i18n/locales/en/common'
import { enCompany } from '@/i18n/locales/en/company'
import { enCouriers } from '@/i18n/locales/en/couriers'
import { enDashboard } from '@/i18n/locales/en/dashboard'
import { enLogin } from '@/i18n/locales/en/login'
import { enSenders } from '@/i18n/locales/en/senders'

export const resources = {
  ar: {
    common: arCommon,
    company: arCompany,
    couriers: arCouriers,
    dashboard: arDashboard,
    login: arLogin,
    senders: arSenders,
  },
  en: {
    common: enCommon,
    company: enCompany,
    couriers: enCouriers,
    dashboard: enDashboard,
    login: enLogin,
    senders: enSenders,
  },
} as const
