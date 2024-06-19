import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <img className={styles.logo} src="images/logo.svg" alt="logo" />
          <div className={styles.count}>
            <p className={styles.score}>Score</p>
            <span className={styles.total}>12</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
