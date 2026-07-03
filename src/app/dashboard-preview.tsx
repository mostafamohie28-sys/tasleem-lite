import { DashboardLayout } from '@/layouts/dashboard-layout'

type DashboardPreviewProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function DashboardPreview({ onLogout, onNavigate }: DashboardPreviewProps) {
  return (
    <DashboardLayout
      currentPath="/dashboard"
      onLogout={onLogout}
      onNavigate={onNavigate}
    />
  )
}
