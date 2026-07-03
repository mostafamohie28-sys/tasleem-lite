import type { TranslationKey } from '@/types/common'

export type Company = {
  address: string
  city: string
  commercialName: string
  companyName: string
  country: string
  defaultCurrency: string
  defaultLanguage: string
  email: string
  mobile: string
  phone: string
  primaryColor: string
  registrationNumber: string
  taxNumber: string
  timeZone: string
  website: string
}

export type CompanyFormSection = {
  fields: readonly TranslationKey[]
  key: TranslationKey
}
