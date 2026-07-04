import type { TranslationKey } from '@/types/common'

export type ShipmentAddress = {
  areaKey: TranslationKey
  building: string
  cityKey: TranslationKey
  floor?: string
  governorateKey: TranslationKey
  street: string
}

export type ShipmentContact = {
  email?: string
  mobile: string
  nameKey: TranslationKey
  phone?: string
}

export type ShipmentTimelineEvent = {
  date: string
  descriptionKey: TranslationKey
  statusKey: TranslationKey
  time: string
}

export type ShipmentAttachment = {
  fileName: string
  typeKey: TranslationKey
}

export type Shipment = {
  address: ShipmentAddress
  attachments: readonly ShipmentAttachment[]
  codAmount: string
  customer: ShipmentContact
  id: string
  notesKey: TranslationKey
  packageTypeKey: TranslationKey
  reference: string
  sender: ShipmentContact
  senderCompanyKey: TranslationKey
  serviceTypeKey: TranslationKey
  shipmentCode: string
  statusKey: TranslationKey
  timeline: readonly ShipmentTimelineEvent[]
  weight: string
}
