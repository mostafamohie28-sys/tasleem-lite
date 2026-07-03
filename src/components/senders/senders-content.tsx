import { useState } from 'react'
import {
  Building2,
  Edit,
  Eye,
  Plus,
  UserCheck,
  UserRoundX,
  Users,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { SenderDialog } from '@/components/senders/sender-dialog'
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
  { labelKey: 'stats.totalSenders', value: '128', icon: Users },
  { labelKey: 'stats.active', value: '112', icon: UserCheck },
  { labelKey: 'stats.inactive', value: '16', icon: UserRoundX },
  { labelKey: 'stats.newThisMonth', value: '9', icon: Building2 },
]

const senders = [
  {
    code: 'SND-1001',
    nameKey: 'table.rows.delta.name',
    companyKey: 'table.rows.delta.company',
    mobile: '+20 100 245 7811',
    cityKey: 'cities.cairo',
    statusKey: 'status.active',
    status: 'active',
  },
  {
    code: 'SND-1002',
    nameKey: 'table.rows.nile.name',
    companyKey: 'table.rows.nile.company',
    mobile: '+20 111 932 4402',
    cityKey: 'cities.giza',
    statusKey: 'status.active',
    status: 'active',
  },
  {
    code: 'SND-1003',
    nameKey: 'table.rows.orbit.name',
    companyKey: 'table.rows.orbit.company',
    mobile: '+20 122 781 5530',
    cityKey: 'cities.alexandria',
    statusKey: 'status.inactive',
    status: 'inactive',
  },
  {
    code: 'SND-1004',
    nameKey: 'table.rows.madina.name',
    companyKey: 'table.rows.madina.company',
    mobile: '+20 155 602 1194',
    cityKey: 'cities.mansoura',
    statusKey: 'status.active',
    status: 'active',
  },
]

export function SendersContent() {
  const { t } = useTranslation(['senders', 'common'])
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
              {t('header.addSender')}
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
          filters={
            <>
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
              <div className="space-y-2">
                <Label>{t('filters.city.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.city.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.city.all')}</SelectItem>
                    <SelectItem value="cairo">{t('cities.cairo')}</SelectItem>
                    <SelectItem value="giza">{t('cities.giza')}</SelectItem>
                    <SelectItem value="alexandria">{t('cities.alexandria')}</SelectItem>
                    <SelectItem value="mansoura">{t('cities.mansoura')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          }
          search={{
            id: 'sender-search',
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
                <TableHead>{t('table.columns.senderName')}</TableHead>
                <TableHead>{t('table.columns.company')}</TableHead>
                <TableHead>{t('table.columns.mobile')}</TableHead>
                <TableHead>{t('table.columns.city')}</TableHead>
                <TableHead>{t('table.columns.status')}</TableHead>
                <TableHead className="text-end">{t('table.columns.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {senders.map((sender) => (
                <TableRow key={sender.code}>
                  <TableCell className="font-medium">{sender.code}</TableCell>
                  <TableCell>{t(sender.nameKey)}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {t(sender.companyKey)}
                  </TableCell>
                  <TableCell>{sender.mobile}</TableCell>
                  <TableCell>{t(sender.cityKey)}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        sender.status === 'active'
                          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-50'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-100'
                      }
                    >
                      {t(sender.status === 'active' ? 'common:status.active' : 'common:status.inactive')}
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

      <SenderDialog
        mode={dialogMode}
        onOpenChange={setDialogOpen}
        open={dialogOpen}
        t={t}
      />
    </main>
  )
}
