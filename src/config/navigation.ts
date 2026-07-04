import {
  BarChart3,
  Building2,
  CircleDollarSign,
  Home,
  Send,
  SlidersHorizontal,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

export type RoutePath =
  | '/dashboard'
  | '/company'
  | '/senders'
  | '/couriers'
  | '/pricing-engine'
  | '/shipments'
  | '/shipment-statuses'

export type SidebarGroup =
  | 'dashboard'
  | 'masterData'
  | 'operations'
  | 'accounting'
  | 'reports'
  | 'settings'

export type NavigationItem = {
  enabled: boolean
  icon: LucideIcon
  id: string
  path?: RoutePath
  protected: boolean
  sidebarGroup: SidebarGroup
  titleKey: string
}

export type SidebarGroupConfig = {
  key: SidebarGroup
  labelKey: string
}

export const sidebarGroups = [
  { key: 'dashboard', labelKey: 'groups.dashboard' },
  { key: 'masterData', labelKey: 'groups.masterData' },
  { key: 'operations', labelKey: 'groups.operations' },
  { key: 'accounting', labelKey: 'groups.accounting' },
  { key: 'reports', labelKey: 'groups.reports' },
  { key: 'settings', labelKey: 'groups.settings' },
] as const satisfies SidebarGroupConfig[]

export const navigationItems = [
  {
    enabled: true,
    icon: Home,
    id: 'dashboard',
    path: '/dashboard',
    protected: true,
    sidebarGroup: 'dashboard',
    titleKey: 'nav.dashboard',
  },
  {
    enabled: true,
    icon: Building2,
    id: 'company',
    path: '/company',
    protected: true,
    sidebarGroup: 'masterData',
    titleKey: 'nav.company',
  },
  {
    enabled: true,
    icon: Users,
    id: 'senders',
    path: '/senders',
    protected: true,
    sidebarGroup: 'masterData',
    titleKey: 'nav.senders',
  },
  {
    enabled: true,
    icon: Truck,
    id: 'couriers',
    path: '/couriers',
    protected: true,
    sidebarGroup: 'masterData',
    titleKey: 'nav.couriers',
  },
  {
    enabled: true,
    icon: CircleDollarSign,
    id: 'pricing-engine',
    path: '/pricing-engine',
    protected: true,
    sidebarGroup: 'masterData',
    titleKey: 'nav.pricingEngine',
  },
  {
    enabled: true,
    icon: Send,
    id: 'shipments',
    path: '/shipments',
    protected: true,
    sidebarGroup: 'operations',
    titleKey: 'nav.shipments',
  },
  {
    enabled: false,
    icon: Wallet,
    id: 'accounting-placeholder',
    protected: true,
    sidebarGroup: 'accounting',
    titleKey: 'nav.placeholder',
  },
  {
    enabled: false,
    icon: BarChart3,
    id: 'reports-placeholder',
    protected: true,
    sidebarGroup: 'reports',
    titleKey: 'nav.placeholder',
  },
  {
    enabled: true,
    icon: SlidersHorizontal,
    id: 'shipment-statuses',
    path: '/shipment-statuses',
    protected: true,
    sidebarGroup: 'settings',
    titleKey: 'nav.shipmentStatuses',
  },
] as const satisfies NavigationItem[]

export const protectedRoutePaths: RoutePath[] = navigationItems.flatMap((item) => {
  if (!item.enabled || !item.protected || !('path' in item)) {
    return []
  }

  return [item.path]
})

export const sidebarNavigation = sidebarGroups.map((group) => ({
  ...group,
  items: navigationItems.filter((item) => item.sidebarGroup === group.key),
}))

export function isProtectedRoutePath(path: string): path is RoutePath {
  return protectedRoutePaths.includes(path as RoutePath)
}
