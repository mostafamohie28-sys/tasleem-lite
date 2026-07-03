import type { EntityStatus, TranslationKey } from '@/types/common'

export type Courier = {
  areaKey: TranslationKey
  code: string
  governorateKey: TranslationKey
  mobile: string
  nameKey: TranslationKey
  status: EntityStatus
  vehicleTypeKey: TranslationKey
}
