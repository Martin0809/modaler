import { useContext } from 'react'
import { ModalContext, ModalInstance } from '../Provider'

export default function useModal(): ModalInstance {
  const modal: ModalInstance = useContext(ModalContext)

  return modal
}
