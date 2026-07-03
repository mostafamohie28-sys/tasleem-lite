import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CompanyPreview } from '@/app/company-preview'
import { CouriersPreview } from '@/app/couriers-preview'
import { DashboardPreview } from '@/app/dashboard-preview'
import { SendersPreview } from '@/app/senders-preview'
import { getLanguageDirection } from '@/i18n'
import {
  isAuthenticated,
  login as loginUser,
  logout as logoutUser,
} from '@/lib/auth'
import { LoginPage } from '@/pages/login-page'

const protectedPaths = ['/dashboard', '/company', '/senders', '/couriers']

function App() {
  const { i18n } = useTranslation()
  const [authenticated, setAuthenticated] = useState(isAuthenticated)
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname

    if (protectedPaths.includes(path) && !isAuthenticated()) {
      window.history.replaceState(null, '', '/')
      return '/'
    }

    return path
  })

  useEffect(() => {
    const handlePopState = () => {
      const loggedIn = isAuthenticated()
      const path = window.location.pathname

      if (protectedPaths.includes(path) && !loggedIn) {
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

  if (currentPath === '/dashboard' && authenticated) {
    return <DashboardPreview onLogout={handleLogout} onNavigate={navigate} />
  }

  if (currentPath === '/company' && authenticated) {
    return <CompanyPreview onLogout={handleLogout} onNavigate={navigate} />
  }

  if (currentPath === '/senders' && authenticated) {
    return <SendersPreview onLogout={handleLogout} onNavigate={navigate} />
  }

  if (currentPath === '/couriers' && authenticated) {
    return <CouriersPreview onLogout={handleLogout} onNavigate={navigate} />
  }

  return <LoginPage onLogin={handleLogin} />
}

export default App
