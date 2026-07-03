import { PricingEngineContent } from '@/components/pricing-engine/pricing-engine-content'
import { DashboardLayout } from '@/layouts/dashboard-layout'

type PricingEnginePreviewProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function PricingEnginePreview({
  onLogout,
  onNavigate,
}: PricingEnginePreviewProps) {
  return (
    <DashboardLayout
      currentPath="/pricing-engine"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <PricingEngineContent />
    </DashboardLayout>
  )
}
