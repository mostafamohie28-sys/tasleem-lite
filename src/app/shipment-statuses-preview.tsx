import { ShipmentStatusesContent } from '@/components/shipment-statuses/shipment-statuses-content'
import { DashboardLayout } from '@/layouts/dashboard-layout'

type ShipmentStatusesPreviewProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function ShipmentStatusesPreview({
  onLogout,
  onNavigate,
}: ShipmentStatusesPreviewProps) {
  return (
    <DashboardLayout
      currentPath="/shipment-statuses"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <ShipmentStatusesContent />
    </DashboardLayout>
  )
}
