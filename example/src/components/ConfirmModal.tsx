import React from 'react'
import { Modal } from 'antd'
import { useModal } from '../../../src'

function ConfirmModal({ visible, title }: any) {
  const modal: any = useModal()

  return (
    <Modal visible={visible} title={title} onCancel={() => modal.hide(300)}>
      12312
    </Modal>
  )
}

export default ConfirmModal
