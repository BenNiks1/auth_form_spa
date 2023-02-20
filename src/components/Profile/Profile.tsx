import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { UiButton } from '@/components'
import styles from './Profile.module.scss'

export const Profile = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <section className={styles.profile}>
      <h3>{t('welcome')}</h3>
      <UiButton
        className={styles.profile_logout}
        elementType='button'
        ariaLabel={t('logout')}
        onClick={() => {
          localStorage.removeItem('access_token')
          navigate('/')
        }}
      >
        {t('logout')}
      </UiButton>
    </section>
  )
}
