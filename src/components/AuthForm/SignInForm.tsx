import { FC, SyntheticEvent, useState } from 'react'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AuthStep, emailRegex } from '@/helpers/constant'
import { UiForm, UiButton, UiInput } from '@/components'
import { useAuth } from 'hooks/useAuth'
import styles from './AuthForm.module.scss'

export interface FormData {
  email: string
  pass: string
}

export const SignInForm: FC = () => {
  // @ts-expect-error
  const { onLogin } = useAuth()

  const navigate = useNavigate()
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({
    value: false,
    error: t('signInDataError'),
  })

  const [formData, setFormData] = useState<FormData>({ email: '', pass: '' })

  const validate = () => {
    if (
      !formData.email.length ||
      !formData.pass.length ||
      !emailRegex.test(formData.email)
    ) {
      setIsError({ ...isError, value: true })
    } else setIsError({ ...isError, value: false })
  }

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if (!isError.value) {
      setIsLoading(true)

      setTimeout(() => {
        onLogin(formData)
        setIsLoading(false)
      }, 500)
    }
  }

  return (
    <UiForm
      submit={submit}
      title={t('welcome')}
      subtitle={t('auth')}
      description={t('authMessage')}
      noValidate
    >
      <div className={styles.form}>
        <div className={styles.form__fields}>
          <UiInput
            id='email'
            label='Email'
            name='email'
            type='email'
            autoComplete='on'
            floatingLabel
            required
            ariaLabel='Email'
            isError={isError.value}
            errorText={isError.error}
            value={formData.email}
            onChange={e => {
              setFormData({ ...formData, email: e.target.value })
            }}
          />
          <UiInput
            id='password'
            name='password'
            label={t('pass')}
            type='password'
            autoComplete='on'
            floatingLabel
            required
            ariaLabel={t('pass')}
            isError={isError.value}
            value={formData.pass}
            onChange={e => {
              setFormData({ ...formData, pass: e.target.value })
            }}
          />
        </div>
        <UiButton
          className={cn(styles.reset_pass)}
          type='base'
          prevent
          ariaLabel={t('toRecovery')}
          onClick={() => {
            navigate(AuthStep.RESET_PASS)
          }}
        >
          {t('forgotPass')}
        </UiButton>
        <div className={styles.form__buttons}>
          <UiButton
            className={styles.form__buttons_item}
            elementType='submit'
            ariaLabel={t('logIn')}
            isLoading={isLoading}
            onClick={validate}
          >
            {t('logIn')}
          </UiButton>
          <UiButton
            className={styles.form__buttons_item}
            type='base'
            prevent
            ariaLabel={t('signUp')}
            onClick={() => {
              navigate(AuthStep.SIGN_UP_FORM)
            }}
          >
            {t('signUp')}
          </UiButton>
        </div>
      </div>
    </UiForm>
  )
}
