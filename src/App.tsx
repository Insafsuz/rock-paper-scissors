import { FC, useState } from 'react'
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import Header from './components/Header/Header'
import Result from './components/Result/Result'
import Modal from './components/ui/Modal/Modal'

const App: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [scene, setScene] = useState('result')

  return (
    <div className='wrapper'>
      <Header />
      <main className='page'>
        {scene === 'game' ? <Game /> : <Result setScene={setScene} />}
      </main>
      <Footer setIsModalVisible={setIsModalVisible} />
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <img src='images/image-rules.svg' alt='rules' />
      </Modal>
    </div>
  )
}

export default App
