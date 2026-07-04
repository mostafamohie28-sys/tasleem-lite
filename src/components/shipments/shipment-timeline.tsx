import { Clock3 } from 'lucide-react'

import type { ShipmentTimelineEvent } from '@/types'

type ShipmentTimelineProps = {
  events: readonly ShipmentTimelineEvent[]
  t: (key: string) => string
}

export function ShipmentTimeline({ events, t }: ShipmentTimelineProps) {
  return (
    <div className="grid gap-3">
      {events.map((event) => (
        <div className="flex gap-3" key={`${event.date}-${event.time}-${event.statusKey}`}>
          <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Clock3 className="size-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 rounded-lg border bg-muted/30 p-3">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold">{t(event.statusKey)}</p>
              <span className="text-xs text-muted-foreground">
                {event.date} · {event.time}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(event.descriptionKey)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
