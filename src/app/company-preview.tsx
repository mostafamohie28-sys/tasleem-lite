import { CompanyContent } from '@/components/company/company-content'
import { DashboardLayout } from '@/layouts/dashboard-layout'

type CompanyPreviewProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function CompanyPreview({ onLogout, onNavigate }: CompanyPreviewProps) {
  return (
    <DashboardLayout
      currentPath="/company"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <CompanyContent />
    </DashboardLayout>
  )
}
