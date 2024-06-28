import { FC } from 'react'
import GameButton from '../GameButton/GameButton'
import styles from './Game.module.scss'

const Game: FC = () => {
  return (
    <section className={styles.game}>
      <GameButton type='default' variant='paper' />
      <GameButton type='default' variant='scissors' />
      <GameButton type='default' variant='rock' />
    </section>
  )
}

export default Game
