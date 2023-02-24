import styles from '@/styles/Input.module.css'

interface Props {
  value: string
  setValue: (arg: string) => void
  loading: boolean
  getData: (text: string) => void
}

export const Input = ({ value, setValue, loading, getData }: Props) => {
  return (
    <div className={styles.formContainer}>
      <input
        maxLength={50}
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={loading}
      />
      <button onClick={() => getData(value)} disabled={loading}>
        {loading ? '...' : 'Send'}
      </button>
    </div>
  )
}
