import { SendersContent } from '@/components/senders/senders-content'
import { DashboardLayout } from '@/layouts/dashboard-layout'

type SendersPreviewProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function SendersPreview({ onLogout, onNavigate }: SendersPreviewProps) {
  return (
    <DashboardLayout
      currentPath="/senders"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <SendersContent />
    </DashboardLayout>
  )
}
