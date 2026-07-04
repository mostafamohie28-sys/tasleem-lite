import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { ShipmentDetailsSheet } from '@/components/shipments/shipment-details-sheet'
import { ShipmentDialog } from '@/components/shipments/shipment-dialog'
import { ShipmentFilters } from '@/components/shipments/shipment-filters'
import { ShipmentStats } from '@/components/shipments/shipment-stats'
import { ShipmentsTable } from '@/components/shipments/shipments-table'
import { PageHeader } from '@/components/shared/page-header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Shipment } from '@/types'

export function ShipmentsContent() {
  const { t } = useTranslation(['shipments', 'common'])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null)

  return (
    <main className="flex-1 overflow-auto bg-[linear-gradient(180deg,#f5f8fc_0%,#eef4fb_100%)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          badge={
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
              {t('common:labels.uiOnly')}
            </Badge>
          }
          description={t('header.description')}
          label={t('header.label')}
          primaryAction={
            <Button
              className="h-10 shadow-lg shadow-orange-500/20"
              type="button"
              onClick={() => setDialogOpen(true)}
            >
              <Plus className="size-4" aria-hidden="true" />
              {t('header.addShipment')}
            </Button>
          }
          title={t('header.title')}
        />

        <ShipmentStats t={t} />

        <ShipmentFilters t={t} />

        <ShipmentsTable onSelectShipment={setSelectedShipment} t={t} />
      </div>

      <ShipmentDialog
        onOpenChange={setDialogOpen}
        open={dialogOpen}
        t={t}
      />
      <ShipmentDetailsSheet
        onOpenChange={(open) => {
          if (!open) {
            setSelectedShipment(null)
          }
        }}
        shipment={selectedShipment}
        t={t}
      />
    </main>
  )
}
