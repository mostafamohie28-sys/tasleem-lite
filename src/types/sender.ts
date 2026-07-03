import type { EntityStatus, TranslationKey } from '@/types/common'

export type Sender = {
  cityKey: TranslationKey
  code: string
  companyKey: TranslationKey
  mobile: string
  nameKey: TranslationKey
  status: EntityStatus
}
