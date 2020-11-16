import React, { Suspense, createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

type ShowFC<T> = (modalSymbol: string, modalProps?: T) => void
type HideFC = (symbol?: string | number, wait?: number) => void

export interface ModalInstance<T = {}> {
  show: ShowFC<T>
  hide: HideFC
}

export const ModalContext: React.Context<ModalInstance> = createContext(null)

export interface ModalMap {
  [key: string]:
    | React.ComponentType<any>
    | React.LazyExoticComponent<React.ComponentType<any>>
}

export default function Provider({
  modalMap,
  children,
  fallback = null,
  hideDelay = 0,
}: {
  modalMap: ModalMap
  children: React.ReactNode
  fallback?: React.ReactNode | null
  hideDelay?: number
}): React.ReactElement {
  const [modals, setModals] = useState([])
  const [visible, setVisible] = useState(false)
  const [modalSymbol, setModalSymbol] = useState('')
  const [modalProps, setModalProps] = useState({})

  // const Modal = modalMap[modalSymbol] as any

  // useEffect(() => {
  //   if (modalSymbol) {
  //     setVisible(true)
  //   }
  // }, [modalSymbol])

  const show: ShowFC<any> = (modalSymbol, modalProps = {}) => {
    // setModalSymbol(modalSymbol)
    // setModalProps(modalProps)
    const newModals = modals.concat({
      Modal: React.memo(modalMap[modalSymbol]),
      visible: true,
      modalSymbol,
      modalProps,
    })

    setModals(newModals)
  }

  const hideAll: HideFC = (wait = hideDelay) => {
    const newModals = modals.map((modal) => {
      return {
        ...modal,
        visible: false,
      }
    })

    setModals(newModals)

    setTimeout(() => {
      setModals([])
    }, wait as number)
  }

  const hide: HideFC = (symbol, wait = hideDelay) => {
    if (!symbol || typeof symbol === 'number') return hideAll(symbol)

    // setVisible(false)
    // setTimeout(() => {
    //   setModalSymbol('')
    // }, wait)
    const newModals = modals.map((modal) => {
      if (modal.modalSymbol === symbol) {
        return {
          ...modal,
          visible: false,
        }
      }

      return modal
    })

    setModals(newModals)

    setTimeout(() => {
      setModals(modals.filter((modal) => modal.modalSymbol !== symbol))
    }, wait)
  }

  console.log(modals)

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
      {/* {modalSymbol
        ? ReactDOM.createPortal(
          <Modal visible={visible} {...modalProps}></Modal>,
          document.body
          )
        : null} */}
      {ReactDOM.createPortal(
        modals.map(({ Modal, visible, modalSymbol, modalProps }) => (
          <Suspense key={modalSymbol} fallback={fallback}>
            <Modal visible={visible} {...modalProps}></Modal>
          </Suspense>
        )),
        document.body
      )}
    </ModalContext.Provider>
  )
}
