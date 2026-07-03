import { FormSection } from '@/components/shared/form-section'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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

type ShipmentStatusDialogProps = {
  mode: 'add' | 'edit'
  onOpenChange: (open: boolean) => void
  open: boolean
  t: (key: string) => string
}

const basicFields = ['arabicName', 'englishName', 'displayOrder'] as const
const visibilityFields = [
  'visibleToEmployee',
  'visibleToCourier',
  'visibleToSender',
  'showInShipmentTracking',
] as const
const behaviorFields = [
  'active',
  'finalStatus',
  'useInPriceLists',
  'requireReason',
  'requireNotes',
  'requirePhoto',
  'requireSignature',
  'requireGpsLocation',
] as const
const futureItems = ['businessRules', 'workflow', 'allowedNextStatuses'] as const

export function ShipmentStatusDialog({
  mode,
  onOpenChange,
  open,
  t,
}: ShipmentStatusDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent
        className="max-h-[calc(100svh-2rem)] overflow-y-auto sm:max-w-3xl"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? t('dialog.addTitle') : t('dialog.editTitle')}
          </DialogTitle>
          <DialogDescription>{t('dialog.description')}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          <FormSection
            separatorPlacement="afterChildren"
            title={t('dialog.sections.basicInformation')}
            variant="plain"
          >
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {basicFields.map((field) => (
                <div className="space-y-2" key={field}>
                  <Label htmlFor={`status-${field}`}>
                    {t(`dialog.fields.${field}.label`)}
                  </Label>
                  <Input
                    className="h-11 bg-white shadow-sm"
                    id={`status-${field}`}
                    placeholder={t(`dialog.fields.${field}.placeholder`)}
                    type="text"
                  />
                </div>
              ))}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="status-description">
                  {t('dialog.fields.description.label')}
                </Label>
                <Textarea
                  className="min-h-24 bg-white shadow-sm"
                  id="status-description"
                  placeholder={t('dialog.fields.description.placeholder')}
                />
              </div>
            </div>
          </FormSection>

          <FormSection
            separatorPlacement="afterChildren"
            title={t('dialog.sections.appearance')}
            variant="plain"
          >
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>{t('dialog.appearance.color.label')}</Label>
                <div className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3">
                  <div className="size-10 rounded-lg bg-[#f97316] shadow-inner" />
                  <div>
                    <p className="text-sm font-medium">
                      {t('dialog.appearance.color.title')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('dialog.appearance.color.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>{t('dialog.appearance.icon.label')}</Label>
                <div className="flex min-h-[66px] items-center rounded-lg border border-dashed bg-muted/40 p-3 text-sm text-muted-foreground">
                  {t('dialog.appearance.icon.placeholder')}
                </div>
              </div>
            </div>
          </FormSection>

          <FormSection
            separatorPlacement="afterChildren"
            title={t('dialog.sections.visibility')}
            variant="plain"
          >
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {visibilityFields.map((field) => (
                <div
                  className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3"
                  key={field}
                >
                  <Checkbox id={`status-${field}`} defaultChecked />
                  <Label htmlFor={`status-${field}`}>
                    {t(`dialog.fields.${field}.label`)}
                  </Label>
                </div>
              ))}
            </div>
          </FormSection>

          <FormSection
            separatorPlacement="afterChildren"
            title={t('dialog.sections.behavior')}
            variant="plain"
          >
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {behaviorFields.map((field) => (
                <div
                  className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3"
                  key={field}
                >
                  <Checkbox id={`status-${field}`} defaultChecked={field === 'active'} />
                  <Label htmlFor={`status-${field}`}>
                    {t(`dialog.fields.${field}.label`)}
                  </Label>
                </div>
              ))}
            </div>
          </FormSection>

          <FormSection
            showSeparator={false}
            title={t('dialog.sections.future')}
            variant="plain"
          >
            <div className="mt-3 grid gap-3">
              {futureItems.map((item) => (
                <div className="rounded-lg border bg-muted/40 p-4" key={item}>
                  <p className="text-sm font-semibold">
                    {t(`dialog.future.${item}.title`)}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`dialog.future.${item}.description`)}
                  </p>
                </div>
              ))}
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
