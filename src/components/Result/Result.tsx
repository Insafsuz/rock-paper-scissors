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
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.choice}>
            <h3 className={styles.title}>You picked</h3>
            <div className={styles.button}>
              <GameButton mode='special' choice='paper' />
            </div>
          </div>
          <div className={styles.info}>
            <h2 className={styles.message}>You loose</h2>
            <Button variant='secondary' onClick={() => setScene('game')}>
              Play again
            </Button>
          </div>
          <div className={`${styles.choice} `}>
            <h3 className={styles.title}>The house picked</h3>
            <div className={`${styles.button} ${styles.winner}`}>
              <GameButton mode='special' choice='scissors' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Result
