import { Search } from 'lucide-react'

import { PricingBulkActions } from '@/components/pricing-engine/pricing-bulk-actions'
import { EmptyState } from '@/components/shared/empty-state'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { priceLists, pricingGovernorates, shipmentStatuses } from '@/mocks'

type PriceListDetailsProps = {
  selectedPriceListId: string | null
  t: (key: string) => string
}

export function PriceListDetails({
  selectedPriceListId,
  t,
}: PriceListDetailsProps) {
  const selectedPriceList = priceLists.find(
    (priceList) => priceList.id === selectedPriceListId,
  )

  return (
    <section className="grid gap-4 rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            {t('details.title')}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('details.description')}
          </p>
        </div>
        <PricingBulkActions t={t} />
      </div>

      {selectedPriceList ? (
        <div className="grid gap-3">
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-sm font-semibold">
              {t(selectedPriceList.nameKey)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(selectedPriceList.descriptionKey)}
            </p>
          </div>

          {pricingGovernorates.map((governorate) => (
            <details
              className="rounded-lg border bg-white p-3"
              key={governorate.code}
            >
              <summary className="cursor-pointer text-sm font-semibold">
                {t(governorate.nameKey)}
              </summary>
              <div className="mt-3 grid gap-3">
                {governorate.areas.map((area) => (
                  <details
                    className="rounded-lg border bg-muted/30 p-3"
                    key={area.code}
                  >
                    <summary className="cursor-pointer text-sm font-medium">
                      {t(area.nameKey)}
                    </summary>
                    <div className="mt-3 overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{t('details.columns.status')}</TableHead>
                            <TableHead>
                              {t('details.columns.senderPrice')}
                            </TableHead>
                            <TableHead>{t('details.columns.notes')}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {area.statusPrices
                            .map((statusPrice) => {
                              const shipmentStatus = shipmentStatuses.find(
                                (status) =>
                                  status.id === statusPrice.shipmentStatusId &&
                                  status.usedInPriceList,
                              )

                              return shipmentStatus
                                ? { shipmentStatus, statusPrice }
                                : null
                            })
                            .filter((row) => row !== null)
                            .map(({ shipmentStatus, statusPrice }) => (
                              <TableRow key={shipmentStatus.id}>
                                <TableCell>
                                  {t(shipmentStatus.englishNameKey)}
                                </TableCell>
                                <TableCell>{statusPrice.senderPrice}</TableCell>
                                <TableCell className="text-muted-foreground">
                                  {t(statusPrice.notesKey)}
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </div>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Search}
          title={t('details.empty.title')}
          description={t('details.empty.description')}
        />
      )}
    </section>
  )
}
