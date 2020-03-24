import { useContext } from 'react'
import { ModalContext } from '../Provider'

export default function useModal() {
  const modal = useContext(ModalContext)

  return modal
}
