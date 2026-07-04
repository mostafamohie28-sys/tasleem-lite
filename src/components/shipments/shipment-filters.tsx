import { SearchToolbar } from '@/components/shared/search-toolbar'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ShipmentFiltersProps = {
  t: (key: string) => string
}

export function ShipmentFilters({ t }: ShipmentFiltersProps) {
  return (
    <SearchToolbar
      filterColumns={3}
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
                <SelectItem value="out-for-delivery">
                  {t('statuses.outForDelivery')}
                </SelectItem>
                <SelectItem value="in-transit">{t('statuses.inTransit')}</SelectItem>
                <SelectItem value="delivered">{t('statuses.delivered')}</SelectItem>
                <SelectItem value="pending-review">
                  {t('statuses.pendingReview')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>{t('filters.governorate.label')}</Label>
            <Select defaultValue="all">
              <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                <SelectValue placeholder={t('filters.governorate.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('filters.governorate.all')}</SelectItem>
                <SelectItem value="cairo">{t('locations.cairo')}</SelectItem>
                <SelectItem value="giza">{t('locations.giza')}</SelectItem>
                <SelectItem value="alexandria">{t('locations.alexandria')}</SelectItem>
                <SelectItem value="dakahlia">{t('locations.dakahlia')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>{t('filters.serviceType.label')}</Label>
            <Select defaultValue="all">
              <SelectTrigger className="h-11 w-full bg-white shadow-sm">
                <SelectValue placeholder={t('filters.serviceType.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('filters.serviceType.all')}</SelectItem>
                <SelectItem value="same-day">{t('serviceTypes.sameDay')}</SelectItem>
                <SelectItem value="next-day">{t('serviceTypes.nextDay')}</SelectItem>
                <SelectItem value="standard">{t('serviceTypes.standard')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      }
      search={{
        id: 'shipment-search',
        label: t('common:actions.search'),
        placeholder: t('filters.search.placeholder'),
      }}
    />
  )
}
