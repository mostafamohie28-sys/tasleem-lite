import { ArrowUpRight, Clock3, PackageCheck, Route, Truck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const stats = [
  { label: 'Ready for handoff', value: '124', icon: PackageCheck },
  { label: 'Out for delivery', value: '38', icon: Truck },
  { label: 'Active routes', value: '12', icon: Route },
  { label: 'Awaiting review', value: '9', icon: Clock3 },
]

const shipments = [
  { id: 'TSL-1048', customer: 'North Star Pharmacy', status: 'Ready', zone: 'Nasr City' },
  { id: 'TSL-1047', customer: 'Green Market', status: 'In transit', zone: 'Maadi' },
  { id: 'TSL-1046', customer: 'Al Noor Clinic', status: 'Pending', zone: 'Heliopolis' },
]

export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto bg-[linear-gradient(180deg,#f5f8fc_0%,#eef4fb_100%)] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section className="flex flex-col justify-between gap-4 rounded-lg border bg-white p-5 shadow-sm shadow-blue-950/5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Overview
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Delivery control center
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Static ERP dashboard preview for dispatch monitoring, shipment
              queues, and route operations.
            </p>
          </div>
          <div className="flex w-full gap-3 sm:w-auto">
            <div className="flex-1 rounded-lg border bg-muted/50 px-4 py-3 sm:min-w-36">
              <p className="text-xs text-muted-foreground">Branch</p>
              <p className="mt-1 text-sm font-semibold">Cairo Hub</p>
            </div>
            <div className="flex-1 rounded-lg border bg-[#082a59] px-4 py-3 text-white sm:min-w-36">
              <p className="text-xs text-white/60">Shift</p>
              <p className="mt-1 text-sm font-semibold">Morning</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <article
              className="group rounded-lg border bg-card p-5 text-card-foreground shadow-sm shadow-blue-950/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-950/10"
              key={item.label}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-4" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <p className="text-3xl font-semibold tracking-tight">{item.value}</p>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                  4.8%
                </span>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)]">
          <div className="overflow-hidden rounded-lg border bg-card shadow-sm shadow-blue-950/5">
            <div className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-base font-semibold">Recent submissions</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                  Static sample rows for the initial dashboard layout.
              </p>
              </div>
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/10">
                Live preview
              </Badge>
            </div>
            <Separator />
            <div className="divide-y">
              {shipments.map((shipment) => (
                <div
                  className="grid gap-3 p-5 transition hover:bg-muted/50 sm:grid-cols-[110px_minmax(0,1fr)_120px_100px] sm:items-center"
                  key={shipment.id}
                >
                  <p className="font-medium">{shipment.id}</p>
                  <p className="text-sm text-muted-foreground">{shipment.customer}</p>
                  <p className="text-sm">{shipment.zone}</p>
                  <Badge variant="secondary" className="w-fit border border-blue-950/5 bg-secondary">
                    {shipment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border bg-[#082a59] p-5 text-white shadow-xl shadow-blue-950/15">
            <h2 className="text-base font-semibold">Today</h2>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-3xl font-semibold tracking-tight">86%</p>
                <p className="mt-1 text-sm text-white/60">On-time handoff rate</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[86%] rounded-full bg-primary" />
                </div>
              </div>
              <Separator className="bg-white/10" />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-white/60">Dispatch window</span>
                  <span className="font-medium">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-white/60">Operators online</span>
                  <span className="font-medium">7</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-white/60">Open exceptions</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
