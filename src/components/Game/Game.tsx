import { FC } from 'react'
import GameButton from '../GameButton/GameButton'
import styles from './Game.module.scss'

const Game: FC = () => {
  return (
    <section className={styles.game}>
      <GameButton variant='paper' />
      <GameButton variant='scissors' />
      <GameButton variant='rock' />
    </section>
  )
}

export default Game
