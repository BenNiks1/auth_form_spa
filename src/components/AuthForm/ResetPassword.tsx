import { FC, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { UiForm, UiButton, UiInput } from '@/components'
import { AuthStep, emailRegex } from '@/helpers/constant'
import styles from './AuthForm.module.scss'

export const ResetPassword: FC = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState({ isError: false, name: '' })

  const validate = () => {
    if (!email.length) {
      setError({
        isError: true,
        name: t('required'),
      })
    } else if (!emailRegex.test(email)) {
      setError({ isError: true, name: t('emailNotValid') })
    } else setError({ isError: false, name: '' })
  }

  const submit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (!error.isError) {
      setIsLoading(true)
      console.log('email', email)

      setTimeout(() => {
        navigate('/')
        setIsLoading(false)
      }, 500)
    }
  }
  return (
    <UiForm
      submit={submit}
      title={t('welcome')}
      subtitle={t('passwordRecovery')}
      description={t('passRecoveryMessage')}
      noValidate
    >
      <div className={styles.form}>
        <UiInput
          id='email'
          label='Email'
          name='email'
          type='email'
          autoComplete='on'
          floatingLabel
          required
          ariaLabel='Email'
          isError={error.isError}
          errorText={error.name}
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className={styles.form}>
        <div className={styles.form__buttons}>
          <UiButton
            className={styles.form__buttons_item}
            elementType='submit'
            ariaLabel={t('continue')}
            isLoading={isLoading}
            onClick={validate}
          >
            {t('continue')}
          </UiButton>
          <UiButton
            className={styles.form__buttons_item}
            type='base'
            prevent
            elementType='button'
            ariaLabel={t('back')}
            onClick={() => {
              navigate(AuthStep.AUTH_FORM)
            }}
          >
            {t('back')}
          </UiButton>
        </div>
      </div>
    </UiForm>
  )
}
