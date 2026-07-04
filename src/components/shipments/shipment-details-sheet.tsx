import { ShipmentTimeline } from '@/components/shipments/shipment-timeline'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Shipment } from '@/types'

type ShipmentDetailsSheetProps = {
  onOpenChange: (open: boolean) => void
  shipment: Shipment | null
  t: (key: string) => string
}

export function ShipmentDetailsSheet({
  onOpenChange,
  shipment,
  t,
}: ShipmentDetailsSheetProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={Boolean(shipment)}>
      <DialogContent className="max-h-[calc(100svh-2rem)] overflow-y-auto sm:max-w-4xl">
        {shipment ? (
          <>
            <DialogHeader>
              <DialogTitle>{shipment.shipmentCode}</DialogTitle>
              <DialogDescription>{t('details.description')}</DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <section className="rounded-lg border bg-muted/30 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t('details.summary.reference')}
                    </p>
                    <p className="font-semibold">{shipment.reference}</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                    {t(shipment.statusKey)}
                  </Badge>
                </div>
              </section>

              <div className="grid gap-4 lg:grid-cols-2">
                <section className="rounded-lg border p-4">
                  <h3 className="text-sm font-semibold">{t('details.sender')}</h3>
                  <p className="mt-2 text-sm">{t(shipment.sender.nameKey)}</p>
                  <p className="text-sm text-muted-foreground">
                    {t(shipment.senderCompanyKey)}
                  </p>
                  <p className="mt-2 text-sm">{shipment.sender.mobile}</p>
                </section>

                <section className="rounded-lg border p-4">
                  <h3 className="text-sm font-semibold">{t('details.customer')}</h3>
                  <p className="mt-2 text-sm">{t(shipment.customer.nameKey)}</p>
                  <p className="mt-2 text-sm">{shipment.customer.mobile}</p>
                </section>
              </div>

              <section className="rounded-lg border p-4">
                <h3 className="text-sm font-semibold">{t('details.address')}</h3>
                <p className="mt-2 text-sm">
                  {shipment.address.street}, {shipment.address.building}
                  {shipment.address.floor ? `, ${shipment.address.floor}` : ''}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(shipment.address.areaKey)} / {t(shipment.address.cityKey)} /{' '}
                  {t(shipment.address.governorateKey)}
                </p>
              </section>

              <div className="grid gap-4 lg:grid-cols-2">
                <section className="rounded-lg border p-4">
                  <h3 className="text-sm font-semibold">
                    {t('details.shipmentInformation')}
                  </h3>
                  <dl className="mt-3 grid gap-2 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">{t('details.serviceType')}</dt>
                      <dd>{t(shipment.serviceTypeKey)}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">{t('details.packageType')}</dt>
                      <dd>{t(shipment.packageTypeKey)}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">{t('details.weight')}</dt>
                      <dd>{shipment.weight}</dd>
                    </div>
                  </dl>
                </section>

                <section className="rounded-lg border p-4">
                  <h3 className="text-sm font-semibold">{t('details.cod')}</h3>
                  <p className="mt-3 text-lg font-semibold">{shipment.codAmount}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t(shipment.notesKey)}
                  </p>
                </section>
              </div>

              <section className="rounded-lg border p-4">
                <h3 className="text-sm font-semibold">{t('details.timeline')}</h3>
                <div className="mt-3">
                  <ShipmentTimeline events={shipment.timeline} t={t} />
                </div>
              </section>

              <section className="rounded-lg border p-4">
                <h3 className="text-sm font-semibold">{t('details.attachments')}</h3>
                <div className="mt-3 grid gap-2">
                  {shipment.attachments.length > 0 ? (
                    shipment.attachments.map((attachment) => (
                      <div
                        className="rounded-lg border bg-muted/30 p-3 text-sm"
                        key={attachment.fileName}
                      >
                        <p className="font-medium">{attachment.fileName}</p>
                        <p className="text-muted-foreground">
                          {t(attachment.typeKey)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      {t('details.noAttachments')}
                    </p>
                  )}
                </div>
              </section>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
