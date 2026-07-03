import type { ReactNode } from 'react'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type SearchToolbarProps = {
  actions?: ReactNode
  filterColumns?: 2 | 3
  filters?: ReactNode
  search: {
    id: string
    label: string
    placeholder: string
  }
}

export function SearchToolbar({
  actions,
  filterColumns = 2,
  filters,
  search,
}: SearchToolbarProps) {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-sm shadow-blue-950/5">
      <div
        className={
          filterColumns === 3
            ? 'grid gap-4 lg:grid-cols-[minmax(260px,1fr)_repeat(3,220px)]'
            : 'grid gap-4 lg:grid-cols-[minmax(260px,1fr)_220px_220px]'
        }
      >
        <div className="space-y-2">
          <Label htmlFor={search.id}>{search.label}</Label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              className="h-11 bg-white ps-10 shadow-sm"
              id={search.id}
              placeholder={search.placeholder}
              type="search"
            />
          </div>
        </div>
        {filters}
        {actions}
      </div>
    </section>
  )
}
