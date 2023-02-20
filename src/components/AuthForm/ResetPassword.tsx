import { FC, SyntheticEvent, useState } from 'react'
import { UiForm, UiButton, UiInput } from '@/components'
import { useNavigate } from 'react-router-dom'
import { AuthStep, emailRegex } from '@/helpers/constant'
import styles from './AuthForm.module.scss'
import { useTranslation } from 'react-i18next'

export const ResetPassword: FC = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

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
    if (!error.isError) console.log('formData', email)
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
            onClick={validate}
          >
            {t('continue')}
          </UiButton>
          <UiButton
            className={styles.form__buttons_item}
            type='base'
            prevent
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
