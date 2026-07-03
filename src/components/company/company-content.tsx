import { Building2, Palette, Upload } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const sections = [
  {
    key: 'companyInformation',
    fields: [
      'companyName',
      'commercialName',
      'taxNumber',
      'registrationNumber',
    ],
  },
  {
    key: 'contactInformation',
    fields: ['phone', 'mobile', 'email', 'website'],
  },
  {
    key: 'address',
    fields: ['country', 'city', 'address'],
  },
  {
    key: 'businessSettings',
    fields: ['defaultCurrency', 'defaultLanguage', 'timeZone'],
  },
] as const

export function CompanyContent() {
  const { t } = useTranslation('company')

  return (
    <main className="flex-1 overflow-auto bg-[linear-gradient(180deg,#f5f8fc_0%,#eef4fb_100%)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section className="flex flex-col justify-between gap-4 rounded-lg border bg-white p-5 shadow-sm shadow-blue-950/5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {t('header.label')}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t('header.title')}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {t('header.description')}
            </p>
          </div>
          <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/10">
            {t('header.badge')}
          </Badge>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="grid gap-6">
            {sections.map((section) => (
              <article
                className="rounded-lg border bg-card p-5 shadow-sm shadow-blue-950/5"
                key={section.key}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Building2 className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold">
                      {t(`sections.${section.key}.title`)}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`sections.${section.key}.description`)}
                    </p>
                  </div>
                </div>

                <Separator className="my-5" />

                <div className="grid gap-4 md:grid-cols-2">
                  {section.fields.map((field) => (
                    <div className="space-y-2" key={field}>
                      <Label htmlFor={field}>{t(`fields.${field}.label`)}</Label>
                      <Input
                        className="h-11 bg-white shadow-sm"
                        id={field}
                        placeholder={t(`fields.${field}.placeholder`)}
                        type="text"
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="grid h-fit gap-6">
            <article className="rounded-lg border bg-card p-5 shadow-sm shadow-blue-950/5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Palette className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-base font-semibold">
                    {t('sections.branding.title')}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t('sections.branding.description')}
                  </p>
                </div>
              </div>

              <Separator className="my-5" />

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label>{t('branding.logo.label')}</Label>
                  <div className="flex min-h-36 flex-col items-center justify-center rounded-lg border border-dashed bg-muted/40 p-5 text-center">
                    <Upload className="size-8 text-muted-foreground" aria-hidden="true" />
                    <p className="mt-3 text-sm font-medium">
                      {t('branding.logo.title')}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {t('branding.logo.description')}
                    </p>
                    <Button className="mt-4" disabled type="button" variant="outline">
                      {t('branding.logo.action')}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t('branding.primaryColor.label')}</Label>
                  <div className="flex items-center justify-between gap-4 rounded-lg border bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#f97316] shadow-inner" />
                      <div>
                        <p className="text-sm font-medium">
                          {t('branding.primaryColor.name')}
                        </p>
                        <p className="text-xs text-muted-foreground">#F97316</p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {t('branding.primaryColor.preview')}
                    </Badge>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border bg-[#082a59] p-5 text-white shadow-xl shadow-blue-950/15">
              <h2 className="text-base font-semibold">{t('actions.title')}</h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {t('actions.description')}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <Button disabled type="button">
                  {t('actions.save')}
                </Button>
                <Button
                  className="border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                  type="button"
                  variant="outline"
                >
                  {t('actions.reset')}
                </Button>
              </div>
            </article>
          </aside>
        </section>
      </div>
    </main>
  )
}
