import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { UiButton } from '@/components'
import styles from './Errors.module.scss'

export const AccessDenied = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={styles.access_denied}>
      <h1 className={styles.access_denied__title}>401 Access Denied</h1>
      <p className={styles.access_denied__subtitle}>{t('accessDenied')}</p>
      <UiButton
        className={styles.access_denied__button}
        elementType='button'
        ariaLabel={t('auth')}
        onClick={() => {
          navigate('/')
        }}
      >
        {t('auth')}
      </UiButton>
    </div>
  )
}
