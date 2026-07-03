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

type PriceListDialogProps = {
  onOpenChange: (open: boolean) => void
  open: boolean
  t: (key: string) => string
}

export function PriceListDialog({
  onOpenChange,
  open,
  t,
}: PriceListDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent
        className="max-h-[calc(100svh-2rem)] overflow-y-auto sm:max-w-2xl"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>{t('dialog.addTitle')}</DialogTitle>
          <DialogDescription>{t('dialog.description')}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5">
          <FormSection
            separatorPlacement="afterChildren"
            title={t('dialog.sections.basic')}
            variant="plain"
          >
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="price-list-name">
                  {t('dialog.fields.name.label')}
                </Label>
                <Input
                  className="h-11 bg-white shadow-sm"
                  id="price-list-name"
                  placeholder={t('dialog.fields.name.placeholder')}
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price-list-code">
                  {t('dialog.fields.code.label')}
                </Label>
                <Input
                  className="h-11 bg-white shadow-sm"
                  id="price-list-code"
                  placeholder={t('dialog.fields.code.placeholder')}
                  type="text"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="price-list-description">
                  {t('dialog.fields.description.label')}
                </Label>
                <Textarea
                  className="min-h-24 bg-white shadow-sm"
                  id="price-list-description"
                  placeholder={t('dialog.fields.description.placeholder')}
                />
              </div>
            </div>
          </FormSection>

          <FormSection
            showSeparator={false}
            title={t('dialog.sections.settings')}
            variant="plain"
          >
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3">
                <Checkbox id="price-list-active" defaultChecked />
                <Label htmlFor="price-list-active">
                  {t('dialog.fields.active.label')}
                </Label>
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3">
                <Checkbox id="price-list-default" />
                <Label htmlFor="price-list-default">
                  {t('dialog.fields.defaultList.label')}
                </Label>
              </div>
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
