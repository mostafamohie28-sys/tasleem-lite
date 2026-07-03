import type { ComponentType, ReactNode } from 'react'

import { Separator } from '@/components/ui/separator'

type FormSectionProps = {
  children: ReactNode
  description?: string
  icon?: ComponentType<{ className?: string }>
  separatorPlacement?: 'beforeChildren' | 'afterChildren'
  showSeparator?: boolean
  title: string
  variant?: 'card' | 'plain'
}

export function FormSection({
  children,
  description,
  icon: Icon,
  separatorPlacement = 'beforeChildren',
  showSeparator = true,
  title,
  variant = 'card',
}: FormSectionProps) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        {Icon ? (
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </div>
        ) : null}
        <div>
          <h2 className={variant === 'card' ? 'text-base font-semibold' : 'text-sm font-semibold'}>
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>

      {showSeparator && separatorPlacement === 'beforeChildren' ? (
        <Separator className={variant === 'card' ? 'my-5' : 'mt-5'} />
      ) : null}

      {children}

      {showSeparator && separatorPlacement === 'afterChildren' ? (
        <Separator className={variant === 'card' ? 'my-5' : 'mt-5'} />
      ) : null}
    </>
  )

  if (variant === 'plain') {
    return <section>{content}</section>
  }

  return (
    <article className="rounded-lg border bg-card p-5 shadow-sm shadow-blue-950/5">
      {content}
    </article>
  )
}
