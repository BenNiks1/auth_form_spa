import { ChangeEvent, FC, ReactNode, SyntheticEvent } from 'react'
import styles from './UiForm.module.scss'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { UiSelect } from '../UiSelect'
import { DefaultTFuncReturn } from 'i18next'

interface FormProps {
  title?: string | DefaultTFuncReturn
  subtitle?: string | DefaultTFuncReturn
  description?: string | DefaultTFuncReturn
  className?: string
  children: ReactNode
  noValidate?: boolean
  submit: (e: SyntheticEvent) => void
}

const options = [
  { value: 'en', children: 'English' },
  { value: 'ru', children: 'Русский' },
]

export const UiForm: FC<FormProps> = ({
  title,
  noValidate = false,
  description,
  className,
  subtitle,
  children,
  submit,
}) => {
  const { i18n } = useTranslation()

  return (
    <div className={styles.container}>
      <form
        className={cn(styles.form, className)}
        noValidate={noValidate}
        onSubmit={submit}
      >
        <div className={styles.form__intro}>
          {title?.length && (
            <h1 className={styles.form__intro_title}>{title}</h1>
          )}
          {subtitle?.length && (
            <p className={styles.form__intro_subtitle}>{subtitle}</p>
          )}
          {description?.length && (
            <p className={styles.form__intro_description}>{description}</p>
          )}
        </div>
        {children}
      </form>
      <div className={cn(styles.outer_form, styles.desktop)}>
        <UiSelect
          options={options}
          defaultValue={localStorage.getItem('lang') || 'en'}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            localStorage.setItem('lang', e.target.value)
            i18n.changeLanguage(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
