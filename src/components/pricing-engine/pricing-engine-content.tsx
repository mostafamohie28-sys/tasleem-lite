import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { FuturePlaceholderCards } from '@/components/pricing-engine/future-placeholder-cards'
import { PriceListDetails } from '@/components/pricing-engine/price-list-details'
import { PriceListDialog } from '@/components/pricing-engine/price-list-dialog'
import { PriceListsTable } from '@/components/pricing-engine/price-lists-table'
import { PageHeader } from '@/components/shared/page-header'
import { SearchToolbar } from '@/components/shared/search-toolbar'
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

export function PricingEngineContent() {
  const { t } = useTranslation(['pricingEngine', 'common'])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedPriceListId, setSelectedPriceListId] = useState<string | null>(null)

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
              onClick={() => setDialogOpen(true)}
            >
              <Plus className="size-4" aria-hidden="true" />
              {t('header.addPriceList')}
            </Button>
          }
          title={t('header.title')}
        />

        <SearchToolbar
          filterColumns={2}
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
                <Label>{t('filters.type.label')}</Label>
                <Select defaultValue="all">
                  <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                    <SelectValue placeholder={t('filters.type.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('filters.type.all')}</SelectItem>
                    <SelectItem value="default">{t('filters.type.default')}</SelectItem>
                    <SelectItem value="custom">{t('filters.type.custom')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          }
          search={{
            id: 'price-list-search',
            label: t('common:actions.search'),
            placeholder: t('filters.search.placeholder'),
          }}
        />

        <PriceListsTable
          onSelectPriceList={setSelectedPriceListId}
          t={t}
        />

        <PriceListDetails selectedPriceListId={selectedPriceListId} t={t} />

        <FuturePlaceholderCards t={t} />
      </div>

      <PriceListDialog
        onOpenChange={setDialogOpen}
        open={dialogOpen}
        t={t}
      />
    </main>
  )
}
