import { Copy, Edit, Trash2 } from 'lucide-react'

import { DataTableContainer } from '@/components/shared/data-table-container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { priceLists } from '@/mocks'

type PriceListsTableProps = {
  onSelectPriceList: (priceListId: string) => void
  t: (key: string) => string
}

export function PriceListsTable({
  onSelectPriceList,
  t,
}: PriceListsTableProps) {
  return (
    <DataTableContainer
      badge={
        <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/10">
          {t('common:labels.demoData')}
        </Badge>
      }
      description={t('priceLists.description')}
      title={t('priceLists.title')}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('priceLists.columns.name')}</TableHead>
            <TableHead>{t('priceLists.columns.description')}</TableHead>
            <TableHead>{t('priceLists.columns.active')}</TableHead>
            <TableHead>{t('priceLists.columns.defaultList')}</TableHead>
            <TableHead>{t('priceLists.columns.senders')}</TableHead>
            <TableHead>{t('priceLists.columns.createdDate')}</TableHead>
            <TableHead className="text-end">
              {t('priceLists.columns.actions')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {priceLists.map((priceList) => (
            <TableRow key={priceList.id}>
              <TableCell>
                <button
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  type="button"
                  onClick={() => onSelectPriceList(priceList.id)}
                >
                  {t(priceList.nameKey)}
                </button>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {t(priceList.descriptionKey)}
              </TableCell>
              <TableCell>
                <Badge
                  className={
                    priceList.active
                      ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-50'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-100'
                  }
                >
                  {t(
                    priceList.active
                      ? 'common:status.active'
                      : 'common:status.inactive',
                  )}
                </Badge>
              </TableCell>
              <TableCell>
                {t(
                  priceList.defaultList
                    ? 'common:labels.yes'
                    : 'common:labels.no',
                )}
              </TableCell>
              <TableCell>{priceList.senderCount}</TableCell>
              <TableCell>{priceList.createdDate}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button
                    size="sm"
                    type="button"
                    variant="outline"
                    onClick={() => onSelectPriceList(priceList.id)}
                  >
                    <Edit className="size-4" aria-hidden="true" />
                    {t('common:actions.edit')}
                  </Button>
                  <Button size="sm" type="button" variant="ghost">
                    <Copy className="size-4" aria-hidden="true" />
                    {t('common:actions.duplicate')}
                  </Button>
                  <Button size="sm" type="button" variant="ghost">
                    <Trash2 className="size-4" aria-hidden="true" />
                    {t('common:actions.delete')}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DataTableContainer>
  )
}
