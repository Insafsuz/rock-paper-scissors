import { FC } from 'react'
import styles from './Game.module.scss'

const Game: FC = () => {
  return (
    <section className={styles.game}>
      <button className={`${styles.btn} ${styles.paper}`}>
        <div className={`${styles.choice} ${styles.paper}` }>
          <img src='images/icon-paper.svg' alt='paper' />
        </div>
      </button>
      <button className={`${styles.btn} ${styles.scissors}`}>
        <div className={`${styles.choice} ${styles.scissors}` }>
          <img src='images/icon-scissors.svg' alt='scissors' />
        </div>
      </button>
      <button className={`${styles.btn} ${styles.rock}`}>
        <div className={`${styles.choice} ${styles.rock}` }>
          <img src='images/icon-rock.svg' alt='rock' />
        </div>
      </button>
    </section>
  )
}

export default Game
