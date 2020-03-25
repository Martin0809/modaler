import React from 'react'
import ModalProvider from '../../src/'
import modals from './components'
import Container from './Container'

import 'antd/dist/antd.css'
import './styles/index.less'

function App() {
  return (
    <ModalProvider modals={modals}>
      <div className="wrapper">
        <h1>Modaler</h1>
        <small>一个简单可插拔的 Modal 容器</small>
        <Container></Container>
      </div>
    </ModalProvider>
  )
}

export default App
