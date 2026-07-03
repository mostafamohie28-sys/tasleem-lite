import { useState } from 'react'
import {
  CheckCircle2,
  Edit,
  Eye,
  Flag,
  Palette,
  Plus,
  Tags,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { ShipmentStatusDialog } from '@/components/shipment-statuses/shipment-status-dialog'
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
  { labelKey: 'stats.totalStatuses', value: '14', icon: Tags },
  { labelKey: 'stats.active', value: '12', icon: CheckCircle2 },
  { labelKey: 'stats.finalStatuses', value: '4', icon: Flag },
  { labelKey: 'stats.usedInPriceLists', value: '7', icon: Palette },
]

const statuses = [
  {
    order: '10',
    arabicNameKey: 'table.rows.created.arabicName',
    englishNameKey: 'table.rows.created.englishName',
    color: '#2563EB',
    iconKey: 'icons.package',
    active: true,
    final: false,
    usedInPriceList: true,
    employee: true,
    courier: false,
    sender: true,
  },
  {
    order: '20',
    arabicNameKey: 'table.rows.assigned.arabicName',
    englishNameKey: 'table.rows.assigned.englishName',
    color: '#F97316',
    iconKey: 'icons.route',
    active: true,
    final: false,
    usedInPriceList: false,
    employee: true,
    courier: true,
    sender: false,
  },
  {
    order: '30',
    arabicNameKey: 'table.rows.delivered.arabicName',
    englishNameKey: 'table.rows.delivered.englishName',
    color: '#16A34A',
    iconKey: 'icons.check',
    active: true,
    final: true,
    usedInPriceList: true,
    employee: true,
    courier: true,
    sender: true,
  },
  {
    order: '40',
    arabicNameKey: 'table.rows.returned.arabicName',
    englishNameKey: 'table.rows.returned.englishName',
    color: '#DC2626',
    iconKey: 'icons.return',
    active: true,
    final: true,
    usedInPriceList: true,
    employee: true,
    courier: true,
    sender: true,
  },
]

export function ShipmentStatusesContent() {
  const { t } = useTranslation(['shipmentStatuses', 'common'])
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
              {t('header.addStatus')}
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
          filterColumns={4}
          filters={
            <>
              <div className="space-y-2">
                <Label>{t('filters.active.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.active.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.active.all')}</SelectItem>
                    <SelectItem value="active">{t('common:status.active')}</SelectItem>
                    <SelectItem value="inactive">{t('common:status.inactive')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t('filters.final.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.final.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.final.all')}</SelectItem>
                    <SelectItem value="final">{t('common.final')}</SelectItem>
                    <SelectItem value="non-final">{t('common.nonFinal')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t('filters.priceList.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.priceList.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.priceList.all')}</SelectItem>
                    <SelectItem value="used">{t('common.used')}</SelectItem>
                    <SelectItem value="not-used">{t('common.notUsed')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t('filters.visibleTo.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.visibleTo.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.visibleTo.all')}</SelectItem>
                    <SelectItem value="employee">{t('visibility.employee')}</SelectItem>
                    <SelectItem value="courier">{t('visibility.courier')}</SelectItem>
                    <SelectItem value="sender">{t('visibility.sender')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          }
          search={{
            id: 'shipment-status-search',
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
                <TableHead>{t('table.columns.order')}</TableHead>
                <TableHead>{t('table.columns.arabicName')}</TableHead>
                <TableHead>{t('table.columns.englishName')}</TableHead>
                <TableHead>{t('table.columns.color')}</TableHead>
                <TableHead>{t('table.columns.iconPlaceholder')}</TableHead>
                <TableHead>{t('table.columns.active')}</TableHead>
                <TableHead>{t('table.columns.final')}</TableHead>
                <TableHead>{t('table.columns.usedInPriceList')}</TableHead>
                <TableHead>{t('table.columns.employee')}</TableHead>
                <TableHead>{t('table.columns.courier')}</TableHead>
                <TableHead>{t('table.columns.sender')}</TableHead>
                <TableHead className="text-end">{t('table.columns.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {statuses.map((status) => (
                <TableRow key={status.order}>
                  <TableCell className="font-medium">{status.order}</TableCell>
                  <TableCell>{t(status.arabicNameKey)}</TableCell>
                  <TableCell>{t(status.englishNameKey)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span
                        className="size-4 rounded-full shadow-inner"
                        style={{ backgroundColor: status.color }}
                      />
                      <span className="text-muted-foreground">{status.color}</span>
                    </div>
                  </TableCell>
                  <TableCell>{t(status.iconKey)}</TableCell>
                  <TableCell>{t(status.active ? 'common.yes' : 'common.no')}</TableCell>
                  <TableCell>{t(status.final ? 'common.yes' : 'common.no')}</TableCell>
                  <TableCell>{t(status.usedInPriceList ? 'common.yes' : 'common.no')}</TableCell>
                  <TableCell>{t(status.employee ? 'common.yes' : 'common.no')}</TableCell>
                  <TableCell>{t(status.courier ? 'common.yes' : 'common.no')}</TableCell>
                  <TableCell>{t(status.sender ? 'common.yes' : 'common.no')}</TableCell>
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

      <ShipmentStatusDialog
        mode={dialogMode}
        onOpenChange={setDialogOpen}
        open={dialogOpen}
        t={t}
      />
    </main>
  )
}
