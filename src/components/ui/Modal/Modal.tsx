import { FC, PropsWithChildren } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
  isModalVisible: boolean
  setIsModalVisible: (isActive: boolean) => void
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isModalVisible,
  setIsModalVisible,
  children,
}) => {
  const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    isModalVisible && (
      <div className={styles.modal} onClick={closeModal}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          <div className={styles.header}>
            <h2 className={styles.title}>Rules</h2>
            <button className={styles.btn} type='button' onClick={closeModal}>
              <img src='/images/icon-close.svg' alt='close' />
            </button>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    )
  )
}

export default Modal
