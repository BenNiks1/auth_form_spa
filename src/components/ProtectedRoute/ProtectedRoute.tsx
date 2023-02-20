import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router'

interface ProtectedRouteProps {
  children: ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (!token) {
      navigate('/401')
    }
  }, [])

  return <>{children}</>
}
