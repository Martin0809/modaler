import React from 'react'
import { Modal } from 'antd'
import { useModal, ModalInstance } from '../../../src'

export interface SuccessModalProps {
  title: string
}

interface Props extends SuccessModalProps {
  visible: boolean
}

function SuccessModal({ visible, title }: Props) {
  const modal: ModalInstance<Props> = useModal()

  return (
    <Modal visible={visible} title={title} onCancel={() => modal.hide(300)}>
      12312
    </Modal>
  )
}

export default SuccessModal
