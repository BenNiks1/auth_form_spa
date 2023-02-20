import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {
  AccessDenied,
  Profile,
  ProtectedRoute,
  ResetPassword,
  SignInForm,
  SignUpForm,
} from '@/components'
import { AuthStep } from '@/helpers/constant'
import { useTranslation } from 'react-i18next'
import { AuthProvider } from 'context/AuthProvider'

export const App = () => {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en'
    if (lang) i18n.changeLanguage(lang)
  }, [location])

  return (
    <AuthProvider>
      <div className='main'>
        <Routes>
          <Route path={AuthStep.AUTH_FORM} element={<SignInForm />} />
          <Route path={AuthStep.SIGN_UP_FORM} element={<SignUpForm />} />
          <Route path={AuthStep.RESET_PASS} element={<ResetPassword />} />
          <Route
            path={AuthStep.PROFILE}
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path={'/401'} element={<AccessDenied />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
