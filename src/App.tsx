import { FC, useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Modal from './components/ui/Modal/Modal'

const App: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className='wrapper'>
      <Header />
      <main className='page'></main>
      <Footer />
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <img src='images/image-rules.svg' alt='' />
      </Modal>
    </div>
  )
}

export default App
