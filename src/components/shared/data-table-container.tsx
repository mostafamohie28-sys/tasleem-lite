import type { ReactNode } from 'react'

type DataTableContainerProps = {
  badge?: ReactNode
  children?: ReactNode
  description?: string
  emptyState?: ReactNode
  isEmpty?: boolean
  title: string
}

export function DataTableContainer({
  badge,
  children,
  description,
  emptyState,
  isEmpty = false,
  title,
}: DataTableContainerProps) {
  return (
    <section className="overflow-hidden rounded-lg border bg-card shadow-sm shadow-blue-950/5">
      <div className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-base font-semibold">{title}</h2>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {badge}
      </div>
      {isEmpty ? emptyState : children}
    </section>
  )
}
