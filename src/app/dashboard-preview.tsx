import { DashboardLayout } from '@/layouts/dashboard-layout'

type DashboardPreviewProps = {
  onLogout: () => void
}

export function DashboardPreview({ onLogout }: DashboardPreviewProps) {
  return <DashboardLayout onLogout={onLogout} />
}
