import { ChangeEvent, FC } from 'react'
import styles from './UiSelect.module.scss'

interface UiSelectProps {
  defaultValue?: string
  options: Options[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

interface Options {
  value: string
  children: string
}

export const UiSelect: FC<UiSelectProps> = ({
  defaultValue,
  options,
  onChange,
}) => (
  <div className={styles.container}>
    <select className={styles.select} onChange={onChange} value={defaultValue}>
      {options.map(({ value, children }: Options) => (
        <option
          key={'option' + value}
          value={value}
          className={styles.select_option}
        >
          {children}
        </option>
      ))}
    </select>
  </div>
)
