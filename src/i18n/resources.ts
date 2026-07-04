import { arCommon } from '@/i18n/locales/ar/common'
import { arCompany } from '@/i18n/locales/ar/company'
import { arCouriers } from '@/i18n/locales/ar/couriers'
import { arDashboard } from '@/i18n/locales/ar/dashboard'
import { arLogin } from '@/i18n/locales/ar/login'
import { arPricingEngine } from '@/i18n/locales/ar/pricing-engine'
import { arSenders } from '@/i18n/locales/ar/senders'
import { arShipments } from '@/i18n/locales/ar/shipments'
import { arShipmentStatuses } from '@/i18n/locales/ar/shipment-statuses'
import { enCommon } from '@/i18n/locales/en/common'
import { enCompany } from '@/i18n/locales/en/company'
import { enCouriers } from '@/i18n/locales/en/couriers'
import { enDashboard } from '@/i18n/locales/en/dashboard'
import { enLogin } from '@/i18n/locales/en/login'
import { enPricingEngine } from '@/i18n/locales/en/pricing-engine'
import { enSenders } from '@/i18n/locales/en/senders'
import { enShipments } from '@/i18n/locales/en/shipments'
import { enShipmentStatuses } from '@/i18n/locales/en/shipment-statuses'

export const resources = {
  ar: {
    common: arCommon,
    company: arCompany,
    couriers: arCouriers,
    dashboard: arDashboard,
    login: arLogin,
    pricingEngine: arPricingEngine,
    senders: arSenders,
    shipments: arShipments,
    shipmentStatuses: arShipmentStatuses,
  },
  en: {
    common: enCommon,
    company: enCompany,
    couriers: enCouriers,
    dashboard: enDashboard,
    login: enLogin,
    pricingEngine: enPricingEngine,
    senders: enSenders,
    shipments: enShipments,
    shipmentStatuses: enShipmentStatuses,
  },
} as const
