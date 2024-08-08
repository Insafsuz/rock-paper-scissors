import { FC } from 'react'
import Button from '../ui/Button/Button'
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Button variant='primary'>Rules</Button>
    </footer>
  )
}

export default Footer
