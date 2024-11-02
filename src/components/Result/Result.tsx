import { FC, useEffect, useState } from 'react'
import GameButton from '../GameButton/GameButton'
import Button from '../ui/Button/Button'
import styles from './Result.module.scss'

interface ResultProps {
  setScene: (scene: string) => void
  myChoice: string
  score: number
  setScore: (score: number) => void
}

const Result: FC<ResultProps> = ({ setScene, myChoice, score, setScore }) => {
  const [house, setHouse] = useState('')
  const [playerResult, setPlayerResult] = useState('second')
  const [counter, setCounter] = useState(3)

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors']
    setHouse(choices[Math.floor(Math.random() * 3)])
  }

  useEffect(() => {
    newHousePick()
  }, [])

  const result = () => {
    if (myChoice === 'rock' && house === 'scissors') {
      setPlayerResult('win')
      setScore(score + 1)
    } else if (myChoice === 'rock' && house === 'paper') {
      setPlayerResult('lose')
      setScore(score - 1)
    } else if (myChoice === 'scissors' && house === 'paper') {
      setPlayerResult('win')
      setScore(score + 1)
    } else if (myChoice === 'scissors' && house === 'rock') {
      setPlayerResult('lose')
      setScore(score - 1)
    } else if (myChoice === 'paper' && house === 'rock') {
      setPlayerResult('win')
      setScore(score + 1)
    } else if (myChoice === 'paper' && house === 'scissors') {
      setPlayerResult('lose')
      setScore(score - 1)
    } else {
      setPlayerResult('draw')
    }
  }

  useEffect(() => {
    let timer: number | null = null

    if (counter > 0) {
      timer = setInterval(() => setCounter(prev => prev - 1), 1000)
    } else {
      result()
    }

    return () => {
      if (timer !== null) {
        clearInterval(timer)
      }
    }
  }, [counter, house])

  return (
    <section className={styles.result}>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.choice}>
            <h3 className={styles.title}>You picked</h3>
            <div
              className={`${styles.button} ${
                playerResult === 'win' ? styles.winner : ''
              }`}
            >
              <GameButton mode='special' choice={myChoice} />
            </div>
          </div>
          {playerResult === 'win' && (
            <div className={styles.info}>
              <h2 className={styles.message}>You win</h2>
              <Button variant='secondary' onClick={() => setScene('game')}>
                Play again
              </Button>
            </div>
          )}
          {playerResult === 'lose' && (
            <div className={styles.info}>
              <h2 className={styles.message}>You lose</h2>
              <Button variant='secondary' onClick={() => setScene('game')}>
                Play again
              </Button>
            </div>
          )}
          {playerResult === 'draw' && (
            <div className={styles.info}>
              <h2 className={styles.message}>Draw</h2>
              <Button variant='secondary' onClick={() => setScene('game')}>
                Play again
              </Button>
            </div>
          )}
          <div className={`${styles.choice} `}>
            <h3 className={styles.title}>The house picked</h3>
            <div
              className={`${styles.button} ${
                playerResult === 'lose' ? styles.winner : ''
              }`}
            >
              {counter === 0 ? (
                <GameButton mode='special' choice={house} />
              ) : (
                <div className={styles.timer}>
                  <span>{counter}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Result
