import { ButtonHTMLAttributes, FC } from 'react'
import styles from './GameButton.module.scss'

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  choice: string
  mode: 'default' | 'special'
}

const GameButton: FC<GameButtonProps> = ({ choice, mode, ...props }) => {
  return (
    <button
      className={`${
        mode === 'default' ? styles.btn__default : styles.btn__special
      } ${styles[choice]}`}
      {...props}
    >
      <div className={`${styles.inner__circle} ${styles[choice]}`}>
        <div className={styles.icon}>
          <img src={`images/icon-${choice}.svg`} alt={choice} />
        </div>
      </div>
    </button>
  )
}

export default GameButton
