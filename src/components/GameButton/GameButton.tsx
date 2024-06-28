import { FC } from 'react'
import styles from './GameButton.module.scss'

interface GameButtonProps {
  variant: 'rock' | 'paper' | 'scissors'
  type: 'default' | 'special'
}

const GameButton: FC<GameButtonProps> = ({ variant, type }) => {
  return (
    <button
      className={`${
        type === 'default' ? styles.btn__default : styles.btn__special
      } ${styles[variant]}`}
    >
      <div className={`${styles.inner__circle} ${styles[variant]}`}>
        <div className={styles.icon}>
          <img src={`images/icon-${variant}.svg`} alt={variant} />
        </div>
      </div>
    </button>
  )
}

export default GameButton
