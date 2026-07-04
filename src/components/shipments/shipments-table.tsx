import { Eye, Pencil } from 'lucide-react'

import { DataTableContainer } from '@/components/shared/data-table-container'
import { EmptyState } from '@/components/shared/empty-state'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { shipments } from '@/mocks'
import type { Shipment } from '@/types'

type ShipmentsTableProps = {
  onSelectShipment: (shipment: Shipment) => void
  t: (key: string) => string
}

export function ShipmentsTable({ onSelectShipment, t }: ShipmentsTableProps) {
  const shipmentRows: readonly Shipment[] = shipments

  return (
    <DataTableContainer
      badge={
        <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/10">
          {t('common:labels.demoData')}
        </Badge>
      }
      description={t('table.description')}
      emptyState={
        <EmptyState
          icon={Eye}
          title={t('table.emptyTitle')}
          description={t('table.emptyDescription')}
        />
      }
      isEmpty={shipmentRows.length === 0}
      title={t('table.title')}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('table.columns.code')}</TableHead>
            <TableHead>{t('table.columns.reference')}</TableHead>
            <TableHead>{t('table.columns.sender')}</TableHead>
            <TableHead>{t('table.columns.customer')}</TableHead>
            <TableHead>{t('table.columns.destination')}</TableHead>
            <TableHead>{t('table.columns.status')}</TableHead>
            <TableHead>{t('table.columns.cod')}</TableHead>
            <TableHead className="text-end">{t('table.columns.actions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shipmentRows.map((shipment) => (
            <TableRow key={shipment.id}>
              <TableCell className="font-medium">{shipment.shipmentCode}</TableCell>
              <TableCell>{shipment.reference}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{t(shipment.sender.nameKey)}</p>
                  <p className="text-xs text-muted-foreground">
                    {t(shipment.senderCompanyKey)}
                  </p>
                </div>
              </TableCell>
              <TableCell>{t(shipment.customer.nameKey)}</TableCell>
              <TableCell>
                {t(shipment.address.governorateKey)} / {t(shipment.address.cityKey)}
              </TableCell>
              <TableCell>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                  {t(shipment.statusKey)}
                </Badge>
              </TableCell>
              <TableCell>{shipment.codAmount}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button
                    size="sm"
                    type="button"
                    variant="ghost"
                    onClick={() => onSelectShipment(shipment)}
                  >
                    <Eye className="size-4" aria-hidden="true" />
                    {t('common:actions.view')}
                  </Button>
                  <Button size="sm" type="button" variant="outline">
                    <Pencil className="size-4" aria-hidden="true" />
                    {t('common:actions.edit')}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataTableContainer>
  )
}
