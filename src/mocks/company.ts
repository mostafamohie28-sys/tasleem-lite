import type { CompanyFormSection } from '@/types'

export const companyFormSections = [
  {
    key: 'companyInformation',
    fields: [
      'companyName',
      'commercialName',
      'taxNumber',
      'registrationNumber',
    ],
  },
  {
    key: 'contactInformation',
    fields: ['phone', 'mobile', 'email', 'website'],
  },
  {
    key: 'address',
    fields: ['country', 'city', 'address'],
  },
  {
    key: 'businessSettings',
    fields: ['defaultCurrency', 'defaultLanguage', 'timeZone'],
  },
] as const satisfies readonly CompanyFormSection[]
