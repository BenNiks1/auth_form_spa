import { ChangeEvent, FC, useState } from 'react'
import { ReactComponent as ShowPassword } from '@/assets/static/svg/show_pass.svg'
import { ReactComponent as HidePassword } from '@/assets/static/svg/hide_pass.svg'
import { DefaultTFuncReturn } from 'i18next'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import styles from './UiInput.module.scss'

interface UiInputProps {
  label?: string | DefaultTFuncReturn
  type?: string
  id: string
  value: string | number
  autoComplete?: string
  placeholder?: string
  name: string
  errorText?: string | DefaultTFuncReturn
  floatingLabel?: boolean | DefaultTFuncReturn
  disabled?: boolean
  isError?: boolean
  required?: boolean
  ariaLabel: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const UiInput: FC<UiInputProps> = ({
  label,
  type = 'text',
  id,
  value,
  autoComplete,
  placeholder,
  name,
  errorText,
  floatingLabel,
  disabled,
  isError,
  required,
  ariaLabel,
  onChange,
}) => {
  const { t } = useTranslation()

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  return (
    <div
      className={cn(styles.input, {
        [styles.input_floating_label]: floatingLabel,
        [styles.is_focused]: isFocused,
        [styles.is_error]: isError,
        [styles.has_value]: String(value).length,
      })}
    >
      {label && !floatingLabel && (
        <label htmlFor={id} className={styles.input__label}>
          {label}
        </label>
      )}
      <div className={styles.input__control}>
        <div className={styles.input__slot}>
          <div className={styles.input__wrap}>
            {label && floatingLabel && (
              <label htmlFor={id} className={styles.input__label}>
                {label}
              </label>
            )}
            <input
              id={id}
              className={styles.input__field}
              autoComplete={autoComplete}
              type={isShowPassword ? 'text' : type}
              name={name}
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              onChange={onChange}
              required={required}
              aria-label={ariaLabel}
              onFocus={() => {
                setIsFocused(true)
              }}
              onBlur={() => {
                setIsFocused(false)
              }}
            />
            {type === 'password' && (
              <button
                className={styles.input__password}
                type='button'
                onClick={() => setIsShowPassword(prev => !prev)}
                aria-label={
                  isShowPassword
                    ? (t('hidePass') as string)
                    : (t('showPass') as string)
                }
              >
                {isShowPassword ? <ShowPassword /> : <HidePassword />}
              </button>
            )}
          </div>
        </div>
        <div className={styles.input__details}>
          {isError && <div className={styles.input__error}>{errorText}</div>}
        </div>
      </div>
    </div>
  )
}
