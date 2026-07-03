import { BarChart3, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { LoginForm } from '@/components/auth/login-form'

type LoginPageProps = {
  onLogin: (username: string, password: string) => boolean
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const { t } = useTranslation(['common', 'login'])
  const previewStats = [
    {
      label: t('login:preview.verifiedHandoffs'),
      value: '1,284',
      icon: CheckCircle2,
    },
    { label: t('login:preview.dailyDispatches'), value: '312', icon: BarChart3 },
    { label: t('login:preview.activeZones'), value: '18', icon: MapPin },
  ]

  return (
    <main className="grid min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#eef5ff_46%,#fff4e8_100%)] text-foreground lg:grid-cols-[minmax(0,0.88fr)_minmax(560px,1.12fr)]">
      <section className="relative flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#082a59] via-primary to-[#ff8a1f]" />
        <LoginForm onLogin={onLogin} />
      </section>

      <section className="hidden min-h-screen border-l border-blue-950/10 bg-[#082a59] p-6 text-white lg:block">
        <div className="premium-panel erp-shadow relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-white/20 p-8 text-foreground">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-muted-foreground">
              {t('login:preview.label')}
            </p>
            <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {t('login:preview.badge')}
            </span>
          </div>

          <div className="relative space-y-8">
            <div className="mx-auto flex max-w-[520px] justify-center">
              <img
                src="/logo.png"
                alt={t('common:brand.domesticLogoAlt')}
                className="max-h-[260px] w-full rounded-lg object-contain drop-shadow-2xl"
              />
            </div>
            <div>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
                {t('login:preview.title')}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                {t('login:preview.description')}
              </p>
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              {previewStats.map((item) => (
                <article className="rounded-lg border border-blue-950/10 bg-white/80 p-4 shadow-sm" key={item.label}>
                  <item.icon className="mb-5 size-5 text-primary" aria-hidden="true" />
                  <p className="text-xl font-semibold tracking-tight">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative grid gap-3 text-sm text-muted-foreground">
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-[#082a59] to-primary" />
            </div>
            <div className="flex justify-between gap-4">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                {t('login:preview.routeReadiness')}
              </span>
              <span className="font-semibold text-foreground">76%</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
