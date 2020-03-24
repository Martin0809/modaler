import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'

interface Props {
  modals: {
    [key: string]: any
  }
  children: any
}

export const ModalContext: any = createContext(null)

function Provider({ modals, children }: Props) {
  const [modalSymbol, setModalSymbol] = useState('')
  const [modalProps, setModalProps] = useState({})
  const Modal = modals[modalSymbol]

  const show = (modalSymbol: string, modalProps: any) => {
    setModalSymbol(modalSymbol)
    setModalProps(modalProps)
  }

  const hide = () => {
    setModalSymbol(undefined)
  }

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
      {modalSymbol
        ? ReactDOM.createPortal(<Modal {...modalProps}></Modal>, document.body)
        : null}
    </ModalContext.Provider>
  )
}

export default Provider
