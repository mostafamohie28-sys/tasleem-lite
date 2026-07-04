import { ShipmentsContent } from '@/components/shipments/shipments-content'
import { DashboardLayout } from '@/layouts/dashboard-layout'

type ShipmentsPreviewProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function ShipmentsPreview({ onLogout, onNavigate }: ShipmentsPreviewProps) {
  return (
    <DashboardLayout
      currentPath="/shipments"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <ShipmentsContent />
    </DashboardLayout>
  )
}
