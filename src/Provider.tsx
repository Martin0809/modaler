import React, { Suspense, createContext, useState } from 'react'
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
  children,
  modalMap,
  hideDelay = 0,
  fallback = null,
}: {
  children: React.ReactNode
  modalMap: ModalMap
  hideDelay?: number
  fallback?: React.ReactNode | null
}): React.ReactElement {
  const [modals, setModals] = useState([])
  const [isHiding, setIsHiding] = useState(false)

  const show: ShowFC<any> = (modalSymbol, modalProps = {}) => {
    if (isHiding) return

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

    setIsHiding(true)
    setModals(newModals)

    setTimeout(() => {
      setIsHiding(false)
      setModals([])
    }, wait as number)
  }

  const hide: HideFC = (symbol, wait = hideDelay) => {
    if (isHiding) return

    if (!symbol || typeof symbol === 'number') return hideAll(symbol)

    const newModals = modals.map((modal) => {
      if (modal.modalSymbol === symbol) {
        return {
          ...modal,
          visible: false,
        }
      }

      return modal
    })

    setIsHiding(true)
    setModals(newModals)

    setTimeout(() => {
      setIsHiding(false)
      setModals(modals.filter((modal) => modal.modalSymbol !== symbol))
    }, wait)
  }

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
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
