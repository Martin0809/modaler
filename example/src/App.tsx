import React from 'react'
import ModalProvider from '../../src/'
import modals from './components'
import Container from './Container'

function App() {
  return (
    <ModalProvider modals={modals}>
      <div>1221</div>
      <Container></Container>
    </ModalProvider>
  )
}

export default App
