import type { TranslationKey } from '@/types/common'

export type ShipmentStatus = {
  active: boolean
  arabicNameKey: TranslationKey
  color: string
  courier: boolean
  employee: boolean
  englishNameKey: TranslationKey
  final: boolean
  iconKey: TranslationKey
  id: string
  order: string
  sender: boolean
  usedInPriceList: boolean
}
