import { FC, ReactNode, SyntheticEvent } from 'react'
import cn from 'classnames'
import styles from './UiButton.module.scss'

interface UiButtonProps {
  children: ReactNode
  ariaLabel: string
  disabled?: boolean
  prevent?: boolean
  elementType?: any
  style?: Style
  type?: ButtonTypes
  className?: string
  onClick?: (e: SyntheticEvent) => void
}

type ButtonTypes = 'primary' | 'secondary' | 'base'

interface Style {
  [key: string]: string | number
}

export const UiButton: FC<UiButtonProps> = ({
  children,
  disabled,
  prevent,
  elementType = 'button',
  className,
  type = 'primary',
  onClick,
  ariaLabel,
}) => (
  <button
    className={cn(styles.button, styles[type], className)}
    disabled={disabled}
    type={elementType}
    name={ariaLabel}
    aria-label={ariaLabel}
    onClick={(e: SyntheticEvent) => {
      prevent && e.preventDefault()
      return typeof onClick !== 'undefined' && onClick(e)
    }}
  >
    {children}
  </button>
)
