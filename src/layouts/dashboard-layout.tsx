import type React from 'react'
import {
  Bell,
  BarChart3,
  Building2,
  CircleDashed,
  Home,
  Menu,
  Search,
  Settings,
  Send,
  Truck,
  Users,
  LogOut,
  Wallet,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { BrandLogo } from '@/components/brand/brand-logo'
import { DashboardContent } from '@/components/dashboard/dashboard-content'
import { LanguageSwitcher } from '@/components/language/language-switcher'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const navGroups = [
  {
    labelKey: 'groups.dashboard',
    items: [{ labelKey: 'nav.dashboard', path: '/dashboard', icon: Home }],
  },
  {
    labelKey: 'groups.masterData',
    items: [
      { labelKey: 'nav.company', path: '/company', icon: Building2 },
      { labelKey: 'nav.senders', path: '/senders', icon: Users },
      { labelKey: 'nav.couriers', path: '/couriers', icon: Truck },
    ],
  },
  {
    labelKey: 'groups.operations',
    items: [{ labelKey: 'nav.placeholder', icon: Send }],
  },
  {
    labelKey: 'groups.accounting',
    items: [{ labelKey: 'nav.placeholder', icon: Wallet }],
  },
  {
    labelKey: 'groups.reports',
    items: [{ labelKey: 'nav.placeholder', icon: BarChart3 }],
  },
  {
    labelKey: 'groups.settings',
    items: [{ labelKey: 'nav.placeholder', icon: Settings }],
  },
]

type DashboardLayoutProps = {
  children?: React.ReactNode
  currentPath: string
  onLogout: () => void
  onNavigate: (path: string) => void
}

export function DashboardLayout({
  children,
  currentPath,
  onLogout,
  onNavigate,
}: DashboardLayoutProps) {
  const { t } = useTranslation(['common', 'dashboard'])

  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-2xl shadow-blue-950/15 lg:flex lg:flex-col">
        <div className="flex h-20 items-center px-5">
          <BrandLogo
            className="text-sidebar-foreground"
            textClassName="[&_p:last-child]:text-white/60"
          />
        </div>
        <Separator />
        <nav className="flex-1 space-y-5 overflow-y-auto p-4">
          {navGroups.map((group) => (
            <div className="space-y-1.5" key={group.labelKey}>
              <p className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/42">
                {t(`dashboard:${group.labelKey}`)}
              </p>
              {group.items.map((item) => {
                const isPlaceholder = !('path' in item)

                return (
                  <Button
                    className="h-10 w-full justify-start gap-3 text-white/78 hover:bg-white/10 hover:text-white data-[variant=secondary]:bg-primary data-[variant=secondary]:text-primary-foreground data-[variant=secondary]:shadow-lg data-[variant=secondary]:shadow-orange-500/20 disabled:text-white/35"
                    disabled={isPlaceholder}
                    key={`${group.labelKey}-${item.labelKey}`}
                    onClick={() => {
                      if (!isPlaceholder) {
                        onNavigate(item.path)
                      }
                    }}
                    type="button"
                    variant={!isPlaceholder && currentPath === item.path ? 'secondary' : 'ghost'}
                  >
                    <item.icon className="size-4" aria-hidden="true" />
                    {isPlaceholder ? (
                      <>
                        <CircleDashed className="size-3 text-white/35" aria-hidden="true" />
                        {t(`dashboard:${item.labelKey}`)}
                      </>
                    ) : (
                      t(`dashboard:${item.labelKey}`)
                    )}
                  </Button>
                )
              })}
            </div>
          ))}
        </nav>
        <div className="m-4 rounded-lg border border-white/10 bg-white/[0.06] p-4">
          <p className="text-sm font-semibold text-white">
            {t('dashboard:sidebar.routeReadiness')}
          </p>
          <p className="mt-1 text-xs leading-5 text-white/60">
            {t('dashboard:sidebar.routeReadinessDescription')}
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[76%] rounded-full bg-primary" />
          </div>
        </div>
      </aside>

      <div className="flex min-h-screen min-w-0 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-3 border-b bg-white/90 px-4 shadow-sm shadow-blue-950/5 backdrop-blur sm:px-6 lg:h-20">
          <div className="flex min-w-0 items-center gap-3">
            <Button className="lg:hidden" size="icon" type="button" variant="ghost">
              <Menu className="size-5" aria-hidden="true" />
              <span className="sr-only">{t('dashboard:nav.openNavigation')}</span>
            </Button>
            <BrandLogo className="lg:hidden" showText={false} />
            <div className="hidden min-w-[280px] items-center gap-2 rounded-lg border bg-muted/70 px-3 py-2.5 text-sm text-muted-foreground shadow-inner sm:flex lg:min-w-[380px]">
              <Search className="size-4" aria-hidden="true" />
              <span>{t('dashboard:nav.search')}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button className="border bg-white shadow-sm" size="icon" type="button" variant="ghost">
              <Bell className="size-5" aria-hidden="true" />
              <span className="sr-only">{t('dashboard:nav.notifications')}</span>
            </Button>
            <Button
              className="hidden border bg-white shadow-sm sm:inline-flex"
              type="button"
              variant="ghost"
              onClick={onLogout}
            >
              <LogOut className="size-4" aria-hidden="true" />
              {t('dashboard:nav.logout')}
            </Button>
            <Button
              className="border bg-white shadow-sm sm:hidden"
              size="icon"
              type="button"
              variant="ghost"
              onClick={onLogout}
            >
              <LogOut className="size-5" aria-hidden="true" />
              <span className="sr-only">{t('dashboard:nav.logout')}</span>
            </Button>
            <Avatar className="size-10 border shadow-sm">
              <AvatarFallback className="bg-[#082a59] text-white">
                {t('common:brand.initials')}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {children ?? <DashboardContent />}
      </div>
    </div>
  )
}
