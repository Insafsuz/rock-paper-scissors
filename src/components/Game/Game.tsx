import { FC } from 'react'
import GameButton from '../GameButton/GameButton'
import styles from './Game.module.scss'

const choices = ['rock', 'paper', 'scissors']

interface GameProps {
  setMyChoice: (myChoice: string) => void
  setScene: (scene: string) => void
}

const Game: FC<GameProps> = ({ setMyChoice, setScene }) => {
  const handleButtonClick = (choice: string) => {
    setMyChoice(choice)
    setScene('result')
  }

  return (
    <section className={styles.game}>
      {choices.map(choice => (
        <GameButton
          key={choice}
          mode='default'
          choice={choice}
          onClick={() => handleButtonClick(choice)}
        />
      ))}
    </section>
  )
}

export default Game
