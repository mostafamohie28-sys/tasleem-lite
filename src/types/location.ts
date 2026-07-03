import type { EntityStatus, TranslationKey } from '@/types/common'

export type Governorate = {
  code: string
  nameKey: TranslationKey
  status: EntityStatus
}

export type Area = {
  code: string
  governorateCode: string
  nameKey: TranslationKey
  status: EntityStatus
}
