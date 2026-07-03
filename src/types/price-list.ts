import type { EntityStatus, TranslationKey } from '@/types/common'

export type PriceList = {
  code: string
  currency: string
  descriptionKey?: TranslationKey
  nameKey: TranslationKey
  status: EntityStatus
}
