import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CompanyPreview } from '@/app/company-preview'
import { CouriersPreview } from '@/app/couriers-preview'
import { DashboardPreview } from '@/app/dashboard-preview'
import { PricingEnginePreview } from '@/app/pricing-engine-preview'
import { SendersPreview } from '@/app/senders-preview'
import { ShipmentsPreview } from '@/app/shipments-preview'
import { ShipmentStatusesPreview } from '@/app/shipment-statuses-preview'
import { isProtectedRoutePath, type RoutePath } from '@/config/navigation'
import { getLanguageDirection } from '@/i18n'
import {
  isAuthenticated,
  login as loginUser,
  logout as logoutUser,
} from '@/lib/auth'
import { LoginPage } from '@/pages/login-page'

type ProtectedRouteProps = {
  onLogout: () => void
  onNavigate: (path: string) => void
}

const protectedRouteRenderers = {
  '/dashboard': (props) => <DashboardPreview {...props} />,
  '/company': (props) => <CompanyPreview {...props} />,
  '/senders': (props) => <SendersPreview {...props} />,
  '/couriers': (props) => <CouriersPreview {...props} />,
  '/pricing-engine': (props) => <PricingEnginePreview {...props} />,
  '/shipments': (props) => <ShipmentsPreview {...props} />,
  '/shipment-statuses': (props) => <ShipmentStatusesPreview {...props} />,
} satisfies Record<RoutePath, (props: ProtectedRouteProps) => ReactNode>

function App() {
  const { i18n } = useTranslation()
  const [authenticated, setAuthenticated] = useState(isAuthenticated)
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname

    if (isProtectedRoutePath(path) && !isAuthenticated()) {
      window.history.replaceState(null, '', '/')
      return '/'
    }

    return path
  })

  useEffect(() => {
    const handlePopState = () => {
      const loggedIn = isAuthenticated()
      const path = window.location.pathname

      if (isProtectedRoutePath(path) && !loggedIn) {
        window.history.replaceState(null, '', '/')
        setCurrentPath('/')
        setAuthenticated(false)
        return
      }

      setCurrentPath(path)
      setAuthenticated(loggedIn)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.dir = getLanguageDirection(i18n.language)
  }, [i18n.language])

  const navigate = (path: string) => {
    window.history.pushState(null, '', path)
    setCurrentPath(path)
  }

  const handleLogin = (username: string, password: string) => {
    if (!loginUser(username, password)) {
      return false
    }

    setAuthenticated(true)
    navigate('/dashboard')
    return true
  }

  const handleLogout = () => {
    logoutUser()
    setAuthenticated(false)
    navigate('/')
  }

  if (authenticated && isProtectedRoutePath(currentPath)) {
    const renderProtectedRoute = protectedRouteRenderers[currentPath]

    return renderProtectedRoute({
      onLogout: handleLogout,
      onNavigate: navigate,
    })
  }

  return <LoginPage onLogin={handleLogin} />
}

export default App
