import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const App = () => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en'
    if (lang) i18n.changeLanguage(lang)
  }, [location])

  return <div className='main'>App</div>
}
