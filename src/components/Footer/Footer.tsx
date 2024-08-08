import { FC } from 'react'
import Button from '../ui/Button/Button'
import styles from './Footer.module.scss'

interface FooterProps {
  setIsModalVisible: (isModalVisible: boolean) => void
}

const Footer: FC<FooterProps> = ({ setIsModalVisible }) => {
  return (
    <footer className={styles.footer}>
      <Button variant='primary' onClick={() => setIsModalVisible(true)}>
        Rules
      </Button>
    </footer>
  )
}

export default Footer
