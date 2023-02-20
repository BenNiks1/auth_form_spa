import { FC, SyntheticEvent, useState } from 'react'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import { AuthStep } from '@/helpers/constant'
import { UiForm, UiButton, UiInput } from '@/components'
import styles from './AuthForm.module.scss'
import { useTranslation } from 'react-i18next'

interface FormData {
  email: string
  pass: string
}

export const SignInForm: FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [isError, setIsError] = useState({
    value: false,
    error: t('signInDataError'),
  })

  const [formData, setFormData] = useState<FormData>({ email: '', pass: '' })

  const validate = (data: FormData) => {
    if (data.pass !== '123') {
      setIsError({ ...isError, value: true })
    } else setIsError({ ...isError, value: false })
  }

  const submit = (e: SyntheticEvent) => {
    e.preventDefault()
    validate(formData)
    console.log('form', formData)
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
