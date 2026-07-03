import type { EntityStatus, TranslationKey } from '@/types/common'

export type PriceList = {
  active: boolean
  code: string
  createdDate: string
  currency: string
  descriptionKey?: TranslationKey
  defaultList: boolean
  id: string
  nameKey: TranslationKey
  senderCount: number
  status: EntityStatus
}

export type PriceListStatusPrice = {
  notesKey: TranslationKey
  senderPrice: string
  shipmentStatusId: string
}

export type PriceListArea = {
  code: string
  nameKey: TranslationKey
  statusPrices: readonly PriceListStatusPrice[]
}

export type PriceListGovernorate = {
  areas: readonly PriceListArea[]
  code: string
  nameKey: TranslationKey
}
