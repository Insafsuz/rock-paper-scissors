import { FC } from 'react'
import GameButton from '../GameButton/GameButton'
import styles from './Game.module.scss'

const Game: FC = () => {
  return (
    <section className={styles.game}>
      <GameButton mode='default' choice='paper' />
      <GameButton mode='default' choice='scissors' />
      <GameButton mode='default' choice='rock' />
    </section>
  )
}

export default Game
