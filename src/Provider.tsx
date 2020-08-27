import React, { Suspense, createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

type ShowFC<T> = (modalSymbol: string, modalProps?: T) => void
type HideFC = (wait?: number) => void

export interface ModalInstance<T = {}> {
  show: ShowFC<T>
  hide: (wait?: number) => void
}

export const ModalContext: React.Context<ModalInstance> = createContext(null)

export interface ModalMap {
  [key: string]:
    | JSX.Element
    | React.FunctionComponent<any>
    | React.LazyExoticComponent<React.ComponentType<any>>
}

export default function Provider({
  modalMap,
  children,
}: {
  modalMap: ModalMap
  children: React.ReactElement
}): React.ReactElement {
  const [visible, setVisible] = useState(false)
  const [modalSymbol, setModalSymbol] = useState('')
  const [modalProps, setModalProps] = useState({})

  const Modal = modalMap[modalSymbol] as any

  useEffect(() => {
    if (modalSymbol) {
      setVisible(true)
    }
  }, [modalSymbol])

  const show: ShowFC<any> = (modalSymbol, modalProps = {}) => {
    setModalSymbol(modalSymbol)
    setModalProps(modalProps)
  }

  const hide: HideFC = (wait = 0) => {
    setVisible(false)
    setTimeout(() => {
      setModalSymbol('')
    }, wait)
  }

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
      <Suspense fallback={null}>
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
