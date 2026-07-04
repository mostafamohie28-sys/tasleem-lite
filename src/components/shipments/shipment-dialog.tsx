import { FormSection } from '@/components/shared/form-section'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type ShipmentDialogProps = {
  onOpenChange: (open: boolean) => void
  open: boolean
  t: (key: string) => string
}

const sections = [
  {
    key: 'generalInformation',
    fields: ['shipmentCode', 'reference', 'serviceType'],
  },
  {
    key: 'sender',
    fields: ['senderName', 'senderMobile', 'senderCompany'],
  },
  {
    key: 'customer',
    fields: ['customerName', 'customerMobile', 'customerPhone'],
  },
  {
    key: 'address',
    fields: ['governorate', 'city', 'area', 'street'],
  },
  {
    key: 'shipmentInformation',
    fields: ['packageType', 'weight', 'status'],
  },
] as const

export function ShipmentDialog({ onOpenChange, open, t }: ShipmentDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent
        className="max-h-[calc(100svh-2rem)] overflow-y-auto sm:max-w-4xl"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>{t('dialog.addTitle')}</DialogTitle>
          <DialogDescription>{t('dialog.description')}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          {sections.map((section) => (
            <FormSection
              key={section.key}
              separatorPlacement="afterChildren"
              title={t(`dialog.sections.${section.key}`)}
              variant="plain"
            >
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                {section.fields.map((field) => (
                  <div className="space-y-2" key={field}>
                    <Label htmlFor={`shipment-${field}`}>
                      {t(`dialog.fields.${field}.label`)}
                    </Label>
                    <Input
                      className="h-11 bg-white shadow-sm"
                      id={`shipment-${field}`}
                      placeholder={t(`dialog.fields.${field}.placeholder`)}
                      type="text"
                    />
                  </div>
                ))}
              </div>
            </FormSection>
          ))}

          <FormSection
            separatorPlacement="afterChildren"
            title={t('dialog.sections.cod')}
            variant="plain"
          >
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="shipment-cod-amount">
                  {t('dialog.fields.codAmount.label')}
                </Label>
                <Input
                  className="h-11 bg-white shadow-sm"
                  id="shipment-cod-amount"
                  placeholder={t('dialog.fields.codAmount.placeholder')}
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipment-cod-notes">
                  {t('dialog.fields.codNotes.label')}
                </Label>
                <Input
                  className="h-11 bg-white shadow-sm"
                  id="shipment-cod-notes"
                  placeholder={t('dialog.fields.codNotes.placeholder')}
                  type="text"
                />
              </div>
            </div>
          </FormSection>

          <FormSection
            showSeparator={false}
            title={t('dialog.sections.notes')}
            variant="plain"
          >
            <div className="mt-3 space-y-2">
              <Label htmlFor="shipment-notes">
                {t('dialog.fields.notes.label')}
              </Label>
              <Textarea
                className="min-h-24 bg-white shadow-sm"
                id="shipment-notes"
                placeholder={t('dialog.fields.notes.placeholder')}
              />
            </div>
          </FormSection>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              {t('common:actions.cancel')}
            </Button>
          </DialogClose>
          <Button disabled type="button">
            {t('common:actions.save')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
