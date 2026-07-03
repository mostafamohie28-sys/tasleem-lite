import { CouriersContent } from '@/components/couriers/couriers-content'
import { DashboardLayout } from '@/layouts/dashboard-layout'

type CouriersPreviewProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function CouriersPreview({ onLogout, onNavigate }: CouriersPreviewProps) {
  return (
    <DashboardLayout
      currentPath="/couriers"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <CouriersContent />
    </DashboardLayout>
  )
}
