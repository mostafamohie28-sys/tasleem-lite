import { RECORD_STATUS } from '@/constants'
import type { Courier, DemoStat } from '@/types'

export const courierStats = [
  { labelKey: 'stats.totalCouriers', value: '64', iconKey: 'users' },
  { labelKey: 'stats.active', value: '58', iconKey: 'userCheck' },
  { labelKey: 'stats.inactive', value: '6', iconKey: 'userRoundX' },
  { labelKey: 'stats.availableToday', value: '43', iconKey: 'bike' },
] as const satisfies readonly DemoStat[]

export const couriers = [
  {
    code: 'CR-2001',
    nameKey: 'table.rows.ahmed.name',
    mobile: '+20 100 842 1975',
    governorateKey: 'governorates.cairo',
    areaKey: 'areas.nasrCity',
    vehicleTypeKey: 'vehicleTypes.motorcycle',
    status: RECORD_STATUS.ACTIVE,
  },
  {
    code: 'CR-2002',
    nameKey: 'table.rows.mahmoud.name',
    mobile: '+20 111 304 8821',
    governorateKey: 'governorates.giza',
    areaKey: 'areas.dokki',
    vehicleTypeKey: 'vehicleTypes.motorcycle',
    status: RECORD_STATUS.ACTIVE,
  },
  {
    code: 'CR-2003',
    nameKey: 'table.rows.karim.name',
    mobile: '+20 122 507 6140',
    governorateKey: 'governorates.alexandria',
    areaKey: 'areas.sidiGaber',
    vehicleTypeKey: 'vehicleTypes.van',
    status: RECORD_STATUS.INACTIVE,
  },
  {
    code: 'CR-2004',
    nameKey: 'table.rows.mostafa.name',
    mobile: '+20 155 913 2208',
    governorateKey: 'governorates.dakahlia',
    areaKey: 'areas.mansoura',
    vehicleTypeKey: 'vehicleTypes.car',
    status: RECORD_STATUS.ACTIVE,
  },
] as const satisfies readonly Courier[]
