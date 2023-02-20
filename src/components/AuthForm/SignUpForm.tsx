import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DefaultTFuncReturn } from 'i18next'
import { useNavigate } from 'react-router-dom'
import { emailRegex, AuthStep, passwordRegex } from '@/helpers/constant'
import { UiForm, UiButton, UiInput } from '@/components'
import styles from './AuthForm.module.scss'

interface FormData {
  user: string
  email: string
  pass: string
  repeatPass: string
}

export const SignUpForm: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    user: '',
    email: '',
    pass: '',
    repeatPass: '',
  })

  const [errors, setErrors] = useState({
    user: { isError: false, text: '' },
    email: { isError: false, text: '' },
    pass: { isError: false, text: '' },
    repeatPass: { isError: false, text: '' },
  })

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: e.target.value,
    }))
  }
  const setError = (key: string, error: string | DefaultTFuncReturn = '') => {
    setErrors(prev => ({
      ...prev,
      [key]: {
        isError: !!error?.length,
        text: error,
      },
    }))
  }
  const validate = () => {
    let errorsCount = 0
    Object.keys(formData).map(key => {
      if (formData[key as keyof FormData].length < 2) {
        setError(key, t('required'))
        errorsCount++
      } else if (key === 'email' && !emailRegex.test(formData[key])) {
        setError(key, t('emailNotValid'))
        errorsCount++
      } else if (key === 'pass' && !passwordRegex.test(formData[key])) {
        setError(key, t('incorrectPass'))
        errorsCount++
      } else if (
        key === 'repeatPass' &&
        formData.pass !== formData.repeatPass
      ) {
        setError(key, t('repeatPassError'))
        errorsCount++
      } else setError(key)
    })

    setIsValid(!errorsCount)
  }

  const submit = (e: SyntheticEvent) => {
    e.preventDefault()

    if (isValid) {
      console.log('form', formData)
      setIsLoading(true)

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
      subtitle={t('registration')}
      description={t('registrationMessage')}
      noValidate
    >
      <div className={styles.form}>
        <div className={styles.form__fields}>
          <UiInput
            id='name'
            name='name'
            label={t('fullName')}
            autoComplete='on'
            floatingLabel
            required
            ariaLabel={t('fullName')}
            isError={errors.user.isError}
            errorText={errors.user.text}
            value={formData.user}
            onChange={e => {
              handleFormChange(e, 'user')
            }}
          />

          <UiInput
            id='email'
            name='email'
            label='Email'
            autoComplete='on'
            floatingLabel
            required
            ariaLabel='Email'
            isError={errors.email.isError}
            errorText={errors.email.text}
            value={formData.email}
            onChange={e => {
              handleFormChange(e, 'email')
            }}
          />

          <UiInput
            id='password'
            name='password'
            type='password'
            label={t('pass')}
            autoComplete='on'
            floatingLabel
            required
            ariaLabel={t('pass')}
            isError={errors.pass.isError}
            errorText={errors.pass.text}
            value={formData.pass}
            onChange={e => {
              handleFormChange(e, 'pass')
            }}
          />

          <UiInput
            id='repeatPassword'
            name='repeatPassword'
            type='password'
            label={t('repeadPass')}
            autoComplete='on'
            floatingLabel
            required
            ariaLabel={t('repeadPass')}
            isError={errors.repeatPass.isError}
            errorText={errors.repeatPass.text}
            value={formData.repeatPass}
            onChange={e => {
              handleFormChange(e, 'repeatPass')
            }}
          />
        </div>

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
