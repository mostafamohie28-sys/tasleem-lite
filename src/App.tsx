import { useEffect, useState } from 'react'

import { DashboardPreview } from '@/app/dashboard-preview'
import {
  isAuthenticated,
  login as loginUser,
  logout as logoutUser,
} from '@/lib/auth'
import { LoginPage } from '@/pages/login-page'

function App() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated)
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname

    if (path === '/dashboard' && !isAuthenticated()) {
      window.history.replaceState(null, '', '/')
      return '/'
    }

    return path
  })

  useEffect(() => {
    const handlePopState = () => {
      const loggedIn = isAuthenticated()
      const path = window.location.pathname

      if (path === '/dashboard' && !loggedIn) {
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
    return <DashboardPreview onLogout={handleLogout} />
  }

  return <LoginPage onLogin={handleLogin} />
}

export default App
