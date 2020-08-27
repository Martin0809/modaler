import React from 'react'
import { Modal } from 'antd'
import { useModal, ModalInstance } from '../../../src'

export interface ConfirmModalProps {
  title: string
  content: string
}

interface Props extends ConfirmModalProps {
  visible: boolean
}

function ConfirmModal({ visible, title, content }: Props) {
  const modal: ModalInstance<Props> = useModal()

  return (
    <Modal visible={visible} title={title} onCancel={() => modal.hide(300)}>
      {content}
    </Modal>
  )
}

export default ConfirmModal
