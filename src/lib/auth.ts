const AUTH_STORAGE_KEY = 'tasleem-lite-authenticated'

const demoUser = {
  username: 'admin',
  password: 'admin123',
}

export function isAuthenticated() {
  return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
}

export function login(username: string, password: string) {
  const isValid =
    username.trim() === demoUser.username && password === demoUser.password

  if (isValid) {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true')
  }

  return isValid
}

export function logout() {
  localStorage.removeItem(AUTH_STORAGE_KEY)
}
