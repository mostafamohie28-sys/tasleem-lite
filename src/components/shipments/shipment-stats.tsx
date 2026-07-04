import {
  CheckCircle2,
  Clock3,
  Package,
  Truck,
  type LucideIcon,
} from 'lucide-react'

import { StatCard } from '@/components/shared/stat-card'
import { StatsGrid } from '@/components/shared/stats-grid'
import { shipmentStats } from '@/mocks'

type ShipmentStatsProps = {
  t: (key: string) => string
}

const statIcons = {
  checkCircle: CheckCircle2,
  clock: Clock3,
  package: Package,
  truck: Truck,
} satisfies Record<string, LucideIcon>

export function ShipmentStats({ t }: ShipmentStatsProps) {
  return (
    <StatsGrid>
      {shipmentStats.map((item) => (
        <StatCard
          icon={statIcons[item.iconKey]}
          key={item.labelKey}
          title={t(item.labelKey)}
          value={item.value}
        />
      ))}
    </StatsGrid>
  )
}
