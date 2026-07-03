import { useState } from 'react'
import {
  Bike,
  Edit,
  Eye,
  Plus,
  UserCheck,
  UserRoundX,
  Users,
  type LucideIcon,
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
import { courierStats, couriers } from '@/mocks'

const statIcons = {
  bike: Bike,
  userCheck: UserCheck,
  userRoundX: UserRoundX,
  users: Users,
} satisfies Record<string, LucideIcon>

export function CouriersContent() {
  const { t } = useTranslation(['couriers', 'common'])
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
              {t('common:labels.uiOnly')}
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
          {courierStats.map((item) => (
            <StatCard
              icon={statIcons[item.iconKey]}
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
                    <SelectItem value="active">{t('common:status.active')}</SelectItem>
                    <SelectItem value="inactive">{t('common:status.inactive')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          }
          search={{
            id: 'courier-search',
            label: t('common:actions.search'),
            placeholder: t('filters.search.placeholder'),
          }}
        />

        <DataTableContainer
          badge={
            <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/10">
              {t('common:labels.demoData')}
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
                      {t(courier.status === 'active' ? 'common:status.active' : 'common:status.inactive')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button size="sm" type="button" variant="ghost">
                        <Eye className="size-4" aria-hidden="true" />
                        {t('common:actions.view')}
                      </Button>
                      <Button
                        size="sm"
                        type="button"
                        variant="outline"
                        onClick={() => openDialog('edit')}
                      >
                        <Edit className="size-4" aria-hidden="true" />
                        {t('common:actions.edit')}
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
