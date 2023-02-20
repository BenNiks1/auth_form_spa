import { createContext, FC, ReactNode } from 'react'
import { login } from 'api/Auth'
import { FormData } from '@/components'
import { useNavigate } from 'react-router'

interface AuthProviderProps {
  children: ReactNode
}

export interface AuthConfigType {
  onLogin: (data: FormData) => void
  onLogout: () => void
}

export const AuthContext = createContext<AuthConfigType | null>(null)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()

  const handleLogin = async (data: FormData) => {
    try {
      const res = await login(data)
      localStorage.setItem('access_token', res)
      navigate('/profile')
    } catch {
      console.error('Error notification')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    navigate('/')
  }

  const value = {
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
