import { FC } from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
  score: number
}

const Header: FC<HeaderProps> = ({ score }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <img className={styles.logo} src='images/logo.svg' alt='logo' />
          <div className={styles.count}>
            <p className={styles.score}>Score</p>
            <span className={styles.total}>{score}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
