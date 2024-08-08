import { FC, useState } from 'react'
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import Header from './components/Header/Header'
import Result from './components/Result/Result'
import Modal from './components/ui/Modal/Modal'

const App: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [scene, setScene] = useState('game')
  const [score, setScore] = useState(0)
  const [myChoice, setMyChoice] = useState('')

  return (
    <div className='wrapper'>
      <Header score={score} />
      <main className='page'>
        {scene === 'game' ? (
          <Game setMyChoice={setMyChoice} setScene={setScene} />
        ) : (
          <Result
            setScene={setScene}
            myChoice={myChoice}
            score={score}
            setScore={setScore}
          />
        )}
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
