import { RECORD_STATUS } from '@/constants'
import type { DemoStat, Sender } from '@/types'

export const senderStats = [
  { labelKey: 'stats.totalSenders', value: '128', iconKey: 'users' },
  { labelKey: 'stats.active', value: '112', iconKey: 'userCheck' },
  { labelKey: 'stats.inactive', value: '16', iconKey: 'userRoundX' },
  { labelKey: 'stats.newThisMonth', value: '9', iconKey: 'building' },
] as const satisfies readonly DemoStat[]

export const senders = [
  {
    code: 'SND-1001',
    nameKey: 'table.rows.delta.name',
    companyKey: 'table.rows.delta.company',
    mobile: '+20 100 245 7811',
    cityKey: 'cities.cairo',
    status: RECORD_STATUS.ACTIVE,
  },
  {
    code: 'SND-1002',
    nameKey: 'table.rows.nile.name',
    companyKey: 'table.rows.nile.company',
    mobile: '+20 111 932 4402',
    cityKey: 'cities.giza',
    status: RECORD_STATUS.ACTIVE,
  },
  {
    code: 'SND-1003',
    nameKey: 'table.rows.orbit.name',
    companyKey: 'table.rows.orbit.company',
    mobile: '+20 122 781 5530',
    cityKey: 'cities.alexandria',
    status: RECORD_STATUS.INACTIVE,
  },
  {
    code: 'SND-1004',
    nameKey: 'table.rows.madina.name',
    companyKey: 'table.rows.madina.company',
    mobile: '+20 155 602 1194',
    cityKey: 'cities.mansoura',
    status: RECORD_STATUS.ACTIVE,
  },
] as const satisfies readonly Sender[]
