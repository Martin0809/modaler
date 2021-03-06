import React, { useEffect } from 'react'
import { Modal, Button } from 'antd'
import { useModal, ModalInstance } from 'modaler/src'

export interface SuccessModalProps {
  title: string
}

interface Props extends SuccessModalProps {
  visible: boolean
}

function SuccessModal(props: Props) {
  const { visible, title } = props
  const modal: ModalInstance<Props> = useModal()

  console.log('SUCCESS_MODAL')

  useEffect(() => {
    console.log('SUCCESS_MODAL', props)
  }, [props])

  return (
    <Modal
      visible={visible}
      title={title}
      onCancel={() => modal.hide('SUCCESS_MODAL', 300)}
    >
      12312
      <br />
      <Button type="primary" onClick={() => modal.show('SECOND_MODAL')}>
        new Modal
      </Button>
    </Modal>
  )
}

export default SuccessModal
