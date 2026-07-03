import { Checkbox } from '@/components/ui/checkbox'
import { FormSection } from '@/components/shared/form-section'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type SenderDialogProps = {
  mode: 'add' | 'edit'
  onOpenChange: (open: boolean) => void
  open: boolean
  t: (key: string) => string
}

const sections = [
  {
    key: 'basicInformation',
    fields: ['senderCode', 'senderName', 'companyName'],
  },
  {
    key: 'contact',
    fields: ['mobile', 'phone', 'email'],
  },
  {
    key: 'address',
    fields: ['governorate', 'city', 'address'],
  },
  {
    key: 'business',
    fields: ['taxNumber', 'commercialRegistration'],
  },
] as const

export function SenderDialog({ mode, onOpenChange, open, t }: SenderDialogProps) {
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
          {sections.map((section) => (
            <FormSection
              key={section.key}
              separatorPlacement="afterChildren"
              title={t(`dialog.sections.${section.key}`)}
              variant="plain"
            >
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                {section.fields.map((field) => (
                  <div className="space-y-2" key={field}>
                    <Label htmlFor={`sender-${field}`}>
                      {t(`dialog.fields.${field}.label`)}
                    </Label>
                    <Input
                      className="h-11 bg-white shadow-sm"
                      id={`sender-${field}`}
                      placeholder={t(`dialog.fields.${field}.placeholder`)}
                      type="text"
                    />
                  </div>
                ))}
              </div>
            </FormSection>
          ))}

          <FormSection
            showSeparator={false}
            title={t('dialog.sections.other')}
            variant="plain"
          >
            <div className="mt-3 grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="sender-notes">
                  {t('dialog.fields.notes.label')}
                </Label>
                <Textarea
                  className="min-h-24 bg-white shadow-sm"
                  id="sender-notes"
                  placeholder={t('dialog.fields.notes.placeholder')}
                />
              </div>
              <div className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3">
                <Checkbox id="sender-active" defaultChecked />
                <Label htmlFor="sender-active">
                  {t('dialog.fields.active.label')}
                </Label>
              </div>
            </div>
          </FormSection>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              {t('dialog.actions.cancel')}
            </Button>
          </DialogClose>
          <Button disabled type="button">
            {t('dialog.actions.save')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
