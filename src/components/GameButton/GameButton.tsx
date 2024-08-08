import { FC } from 'react'
import styles from './GameButton.module.scss'

interface GameButtonProps {
  choice: string
  mode: 'default' | 'special'
}

const GameButton: FC<GameButtonProps> = ({ choice, mode }) => {
  return (
    <button
      className={`${
        mode === 'default' ? styles.btn__default : styles.btn__special
      } ${styles[choice]}`}
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
