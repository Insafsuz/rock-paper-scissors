import { FC } from 'react'
import styles from './GameButton.module.scss'

interface GameButtonProps {
  variant: 'rock' | 'paper' | 'scissors'
  type?: 'big'
}

const GameButton: FC<GameButtonProps> = ({ variant, type }) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${type ? styles[type] : ''}`}
    >
      <div className={`${styles.choice} ${styles[variant]}`}>
        <img src={`images/icon-${variant}.svg`} alt={variant} />
      </div>
    </button>
  )
}

export default GameButton
