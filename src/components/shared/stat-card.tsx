import type { ComponentType } from 'react'

type StatCardProps = {
  icon: ComponentType<{ className?: string }>
  subtitle?: string
  title: string
  value: string
}

export function StatCard({
  icon: Icon,
  subtitle,
  title,
  value,
}: StatCardProps) {
  return (
    <article className="rounded-lg border bg-card p-5 text-card-foreground shadow-sm shadow-blue-950/5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-4" />
        </div>
      </div>
      <p className="mt-5 text-3xl font-semibold tracking-tight">{value}</p>
      {subtitle ? (
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
    </article>
  )
}
