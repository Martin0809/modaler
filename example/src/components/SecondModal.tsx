import React, { useEffect } from 'react'
import { Modal, Button } from 'antd'
import { useModal, ModalInstance } from 'modaler/src'

interface Props {
  visible: boolean
}

function SecondModal({ visible }: Props) {
  const modal: ModalInstance<Props> = useModal()

  useEffect(() => {
    console.log('SECOND_MODAL')
  }, [visible])

  return (
    <Modal
      visible={visible}
      title={'SECOND_MODAL'}
      onCancel={() => modal.hide('SECOND_MODAL', 300)}
    >
      SECOND_MODAL
      <br />
      <Button type="primary" onClick={() => modal.hide(300)}>
        close all
      </Button>
    </Modal>
  )
}

export default SecondModal
