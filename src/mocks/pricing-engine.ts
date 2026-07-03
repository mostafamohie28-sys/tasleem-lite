import { DEFAULT_CURRENCY, RECORD_STATUS } from '@/constants'
import type { PriceList, PriceListGovernorate } from '@/types'

export const priceLists = [
  {
    active: true,
    code: 'PL-DEFAULT',
    createdDate: '2026-01-10',
    currency: DEFAULT_CURRENCY,
    defaultList: true,
    descriptionKey: 'priceLists.rows.default.description',
    id: 'default',
    nameKey: 'priceLists.rows.default.name',
    senderCount: 84,
    status: RECORD_STATUS.ACTIVE,
  },
  {
    active: true,
    code: 'PL-VIP',
    createdDate: '2026-02-18',
    currency: DEFAULT_CURRENCY,
    defaultList: false,
    descriptionKey: 'priceLists.rows.vip.description',
    id: 'vip',
    nameKey: 'priceLists.rows.vip.name',
    senderCount: 18,
    status: RECORD_STATUS.ACTIVE,
  },
  {
    active: true,
    code: 'PL-AMAZON',
    createdDate: '2026-03-04',
    currency: DEFAULT_CURRENCY,
    defaultList: false,
    descriptionKey: 'priceLists.rows.amazon.description',
    id: 'amazon',
    nameKey: 'priceLists.rows.amazon.name',
    senderCount: 1,
    status: RECORD_STATUS.ACTIVE,
  },
  {
    active: false,
    code: 'PL-NOON',
    createdDate: '2026-03-22',
    currency: DEFAULT_CURRENCY,
    defaultList: false,
    descriptionKey: 'priceLists.rows.noon.description',
    id: 'noon',
    nameKey: 'priceLists.rows.noon.name',
    senderCount: 1,
    status: RECORD_STATUS.INACTIVE,
  },
] as const satisfies readonly PriceList[]

export const pricingGovernorates = [
  {
    code: 'cairo',
    nameKey: 'governorates.cairo',
    areas: [
      {
        code: 'nasr-city',
        nameKey: 'areas.nasrCity',
        statusPrices: [
          {
            shipmentStatusId: 'created',
            senderPrice: '45.00',
            notesKey: 'notes.standard',
          },
          {
            shipmentStatusId: 'delivered',
            senderPrice: '65.00',
            notesKey: 'notes.delivery',
          },
          {
            shipmentStatusId: 'returned',
            senderPrice: '35.00',
            notesKey: 'notes.return',
          },
        ],
      },
      {
        code: 'heliopolis',
        nameKey: 'areas.heliopolis',
        statusPrices: [
          {
            shipmentStatusId: 'created',
            senderPrice: '50.00',
            notesKey: 'notes.standard',
          },
          {
            shipmentStatusId: 'delivered',
            senderPrice: '70.00',
            notesKey: 'notes.delivery',
          },
          {
            shipmentStatusId: 'returned',
            senderPrice: '40.00',
            notesKey: 'notes.return',
          },
        ],
      },
    ],
  },
  {
    code: 'giza',
    nameKey: 'governorates.giza',
    areas: [
      {
        code: 'dokki',
        nameKey: 'areas.dokki',
        statusPrices: [
          {
            shipmentStatusId: 'created',
            senderPrice: '48.00',
            notesKey: 'notes.standard',
          },
          {
            shipmentStatusId: 'delivered',
            senderPrice: '68.00',
            notesKey: 'notes.delivery',
          },
          {
            shipmentStatusId: 'returned',
            senderPrice: '38.00',
            notesKey: 'notes.return',
          },
        ],
      },
    ],
  },
  {
    code: 'alexandria',
    nameKey: 'governorates.alexandria',
    areas: [
      {
        code: 'sidi-gaber',
        nameKey: 'areas.sidiGaber',
        statusPrices: [
          {
            shipmentStatusId: 'created',
            senderPrice: '60.00',
            notesKey: 'notes.standard',
          },
          {
            shipmentStatusId: 'delivered',
            senderPrice: '85.00',
            notesKey: 'notes.delivery',
          },
          {
            shipmentStatusId: 'returned',
            senderPrice: '45.00',
            notesKey: 'notes.return',
          },
        ],
      },
    ],
  },
] as const satisfies readonly PriceListGovernorate[]

export const futurePricingCards = [
  'versionHistory',
  'effectiveDate',
  'pricingRules',
  'courierPricing',
  'weightPricing',
  'codPricing',
  'advancedConditions',
] as const
