import { Copy, Download, Layers3, Upload } from 'lucide-react'

import { Button } from '@/components/ui/button'

type PricingBulkActionsProps = {
  t: (key: string) => string
}

export function PricingBulkActions({ t }: PricingBulkActionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" type="button" variant="outline">
        <Copy className="size-4" aria-hidden="true" />
        {t('bulk.copyFromArea')}
      </Button>
      <Button size="sm" type="button" variant="outline">
        <Layers3 className="size-4" aria-hidden="true" />
        {t('bulk.applyToGovernorate')}
      </Button>
      <Button size="sm" type="button" variant="outline">
        <Copy className="size-4" aria-hidden="true" />
        {t('bulk.duplicatePriceList')}
      </Button>
      <Button disabled size="sm" type="button" variant="outline">
        <Upload className="size-4" aria-hidden="true" />
        {t('bulk.importExcel')}
      </Button>
      <Button disabled size="sm" type="button" variant="outline">
        <Download className="size-4" aria-hidden="true" />
        {t('bulk.exportExcel')}
      </Button>
    </div>
  )
}
