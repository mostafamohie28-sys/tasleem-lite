import { useState } from 'react'
import { ArrowRight, LockKeyhole, Mail } from 'lucide-react'

import { BrandLogo } from '@/components/brand/brand-logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type LoginFormProps = {
  onLogin: (username: string, password: string) => boolean
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = onLogin(username, password)

    if (!isValid) {
      setError('Invalid username or password. Please try again.')
      return
    }

    setError('')
  }

  return (
    <div className="w-full max-w-[440px] rounded-lg border border-white/70 bg-white/90 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur sm:p-8">
      <BrandLogo className="mb-10" />

      <div className="mb-8">
        <p className="mb-3 w-fit rounded-md bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Operator access
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          Sign in to manage deliveries
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Monitor internal shipments, daily route readiness, and handoff queues
          from a focused ERP workspace.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              className="h-11 bg-white pl-10 shadow-sm"
              id="username"
              type="text"
              placeholder="admin"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value)
                setError('')
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="password">Password</Label>
            <a
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
              href="#"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <LockKeyhole
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              className="h-11 bg-white pl-10 shadow-sm"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                setError('')
              }}
            />
          </div>
        </div>

        {error ? (
          <p className="rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
            {error}
          </p>
        ) : null}

        <Button className="h-11 w-full bg-primary text-sm font-semibold shadow-lg shadow-orange-500/20 hover:bg-primary/90" type="submit">
          Sign in
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </form>

      <div className="mt-7 grid grid-cols-3 gap-3 border-t pt-6 text-center">
        {[
          ['Fast', 'handoff'],
          ['Live', 'routes'],
          ['Secure', 'access'],
        ].map(([value, label]) => (
          <div key={value}>
            <p className="text-sm font-semibold text-foreground">{value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
