import { useState } from 'react'
import {
  Bike,
  Edit,
  Eye,
  Plus,
  UserCheck,
  UserRoundX,
  Users,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { CourierDialog } from '@/components/couriers/courier-dialog'
import { DataTableContainer } from '@/components/shared/data-table-container'
import { PageHeader } from '@/components/shared/page-header'
import { SearchToolbar } from '@/components/shared/search-toolbar'
import { StatCard } from '@/components/shared/stat-card'
import { StatsGrid } from '@/components/shared/stats-grid'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const stats = [
  { labelKey: 'stats.totalCouriers', value: '64', icon: Users },
  { labelKey: 'stats.active', value: '58', icon: UserCheck },
  { labelKey: 'stats.inactive', value: '6', icon: UserRoundX },
  { labelKey: 'stats.availableToday', value: '43', icon: Bike },
]

const couriers = [
  {
    code: 'CR-2001',
    nameKey: 'table.rows.ahmed.name',
    mobile: '+20 100 842 1975',
    governorateKey: 'governorates.cairo',
    areaKey: 'areas.nasrCity',
    vehicleTypeKey: 'vehicleTypes.motorcycle',
    statusKey: 'status.active',
    status: 'active',
  },
  {
    code: 'CR-2002',
    nameKey: 'table.rows.mahmoud.name',
    mobile: '+20 111 304 8821',
    governorateKey: 'governorates.giza',
    areaKey: 'areas.dokki',
    vehicleTypeKey: 'vehicleTypes.motorcycle',
    statusKey: 'status.active',
    status: 'active',
  },
  {
    code: 'CR-2003',
    nameKey: 'table.rows.karim.name',
    mobile: '+20 122 507 6140',
    governorateKey: 'governorates.alexandria',
    areaKey: 'areas.sidiGaber',
    vehicleTypeKey: 'vehicleTypes.van',
    statusKey: 'status.inactive',
    status: 'inactive',
  },
  {
    code: 'CR-2004',
    nameKey: 'table.rows.mostafa.name',
    mobile: '+20 155 913 2208',
    governorateKey: 'governorates.dakahlia',
    areaKey: 'areas.mansoura',
    vehicleTypeKey: 'vehicleTypes.car',
    statusKey: 'status.active',
    status: 'active',
  },
]

export function CouriersContent() {
  const { t } = useTranslation('couriers')
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add')
  const [dialogOpen, setDialogOpen] = useState(false)

  const openDialog = (mode: 'add' | 'edit') => {
    setDialogMode(mode)
    setDialogOpen(true)
  }

  return (
    <main className="flex-1 overflow-auto bg-[linear-gradient(180deg,#f5f8fc_0%,#eef4fb_100%)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <PageHeader
          badge={
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
              {t('header.badge')}
            </Badge>
          }
          description={t('header.description')}
          label={t('header.label')}
          primaryAction={
            <Button
              className="h-10 shadow-lg shadow-orange-500/20"
              type="button"
              onClick={() => openDialog('add')}
            >
              <Plus className="size-4" aria-hidden="true" />
              {t('header.addCourier')}
            </Button>
          }
          title={t('header.title')}
        />

        <StatsGrid>
          {stats.map((item) => (
            <StatCard
              icon={item.icon}
              key={item.labelKey}
              title={t(item.labelKey)}
              value={item.value}
            />
          ))}
        </StatsGrid>

        <SearchToolbar
          filterColumns={3}
          filters={
            <>
              <div className="space-y-2">
                <Label>{t('filters.governorate.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.governorate.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.governorate.all')}</SelectItem>
                    <SelectItem value="cairo">{t('governorates.cairo')}</SelectItem>
                    <SelectItem value="giza">{t('governorates.giza')}</SelectItem>
                    <SelectItem value="alexandria">{t('governorates.alexandria')}</SelectItem>
                    <SelectItem value="dakahlia">{t('governorates.dakahlia')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t('filters.area.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.area.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.area.all')}</SelectItem>
                    <SelectItem value="nasr-city">{t('areas.nasrCity')}</SelectItem>
                    <SelectItem value="dokki">{t('areas.dokki')}</SelectItem>
                    <SelectItem value="sidi-gaber">{t('areas.sidiGaber')}</SelectItem>
                    <SelectItem value="mansoura">{t('areas.mansoura')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t('filters.status.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.status.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.status.all')}</SelectItem>
                    <SelectItem value="active">{t('status.active')}</SelectItem>
                    <SelectItem value="inactive">{t('status.inactive')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          }
          search={{
            id: 'courier-search',
            label: t('filters.search.label'),
            placeholder: t('filters.search.placeholder'),
          }}
        />

        <DataTableContainer
          badge={
            <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/10">
              {t('table.badge')}
            </Badge>
          }
          description={t('table.description')}
          title={t('table.title')}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('table.columns.code')}</TableHead>
                <TableHead>{t('table.columns.courierName')}</TableHead>
                <TableHead>{t('table.columns.mobile')}</TableHead>
                <TableHead>{t('table.columns.governorate')}</TableHead>
                <TableHead>{t('table.columns.area')}</TableHead>
                <TableHead>{t('table.columns.vehicleType')}</TableHead>
                <TableHead>{t('table.columns.status')}</TableHead>
                <TableHead className="text-end">{t('table.columns.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {couriers.map((courier) => (
                <TableRow key={courier.code}>
                  <TableCell className="font-medium">{courier.code}</TableCell>
                  <TableCell>{t(courier.nameKey)}</TableCell>
                  <TableCell>{courier.mobile}</TableCell>
                  <TableCell>{t(courier.governorateKey)}</TableCell>
                  <TableCell>{t(courier.areaKey)}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {t(courier.vehicleTypeKey)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        courier.status === 'active'
                          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-50'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-100'
                      }
                    >
                      {t(courier.statusKey)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button size="sm" type="button" variant="ghost">
                        <Eye className="size-4" aria-hidden="true" />
                        {t('table.actions.view')}
                      </Button>
                      <Button
                        size="sm"
                        type="button"
                        variant="outline"
                        onClick={() => openDialog('edit')}
                      >
                        <Edit className="size-4" aria-hidden="true" />
                        {t('table.actions.edit')}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DataTableContainer>
      </div>

      <CourierDialog
        mode={dialogMode}
        onOpenChange={setDialogOpen}
        open={dialogOpen}
        t={t}
      />
    </main>
  )
}
