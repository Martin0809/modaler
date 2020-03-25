import React from 'react'
import { Modal } from 'antd'
import { useModal } from '../../../src'

function SuccessModal({ visible, title }: any) {
  const modal: any = useModal()

  return (
    <Modal visible={visible} title={title} onCancel={() => modal.hide(300)}>
      12312
    </Modal>
  )
}

export default SuccessModal
