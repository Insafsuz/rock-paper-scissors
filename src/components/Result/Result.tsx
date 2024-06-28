import { FC } from 'react'
import GameButton from '../GameButton/GameButton'
import Button from '../ui/Button/Button'
import styles from './Result.module.scss'

interface ResultProps {
  setScene: (scene: string) => void
}

const Result: FC<ResultProps> = ({ setScene }) => {
  return (
    <section className={styles.result}>
      <div className={styles.details}>
        <div className={styles.choice}>
          <GameButton type='special' variant='paper' />
        </div>
        <div className={styles.info}>
          <h2 className={styles.message}>You loose</h2>
          <Button variant='secondary' onClick={() => setScene('game')}>
            Play again
          </Button>
        </div>
        <div className={`${styles.choice} ${styles.winner}`}>
          <GameButton type='special' variant='rock' />
        </div>
      </div>
    </section>
  )
}

export default Result
