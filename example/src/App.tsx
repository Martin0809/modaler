import React from 'react'
import Modal from './components'

function App() {
  const handleClick = () => {
    console.log('old')
  }

  return (
    <div onClick={handleClick}>
      1221
      <Modal></Modal>
    </div>
  )
}

export default App
