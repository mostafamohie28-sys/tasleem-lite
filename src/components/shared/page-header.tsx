import type { ReactNode } from 'react'

type PageHeaderProps = {
  badge?: ReactNode
  description: string
  label?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
  title: string
}

export function PageHeader({
  badge,
  description,
  label,
  primaryAction,
  secondaryAction,
  title,
}: PageHeaderProps) {
  const hasActions = primaryAction || secondaryAction

  return (
    <section className="flex flex-col justify-between gap-4 rounded-lg border bg-white p-5 shadow-sm shadow-blue-950/5 sm:flex-row sm:items-end">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          {label ? (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {label}
            </p>
          ) : null}
          {badge}
        </div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      {hasActions ? (
        <div className="flex shrink-0 gap-2">
          {secondaryAction}
          {primaryAction}
        </div>
      ) : null}
    </section>
  )
}
