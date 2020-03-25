import React, { Suspense, createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

interface Props {
  modalMap: {
    [key: string]: any
  }
  children: any
}

export const ModalContext: any = createContext(null)

function Provider({ modalMap, children }: Props) {
  const [visible, setVisible] = useState(false)
  const [modalSymbol, setModalSymbol] = useState('')
  const [modalProps, setModalProps] = useState({})
  const Modal = modalMap[modalSymbol]

  useEffect(() => {
    if (modalSymbol) {
      setVisible(true)
    }
  }, [modalSymbol])

  const show = (modalSymbol: string, modalProps: any = {}) => {
    setModalSymbol(modalSymbol)
    setModalProps(modalProps)
  }

  const hide = (wait: number = 0) => {
    setVisible(false)
    setTimeout(() => {
      setModalSymbol(undefined)
    }, wait)
  }

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
      <Suspense fallback={<div>Loading...</div>}>
        {modalSymbol
          ? ReactDOM.createPortal(
              <Modal visible={visible} {...modalProps}></Modal>,
              document.body
            )
          : null}
      </Suspense>
    </ModalContext.Provider>
  )
}

export default Provider
