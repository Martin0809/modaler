import React from 'react'
import { Button } from 'antd'
import { useModal, ModalInstance } from 'modaler/src'
import { SuccessModalProps } from './components/SuccessModal'
import { ConfirmModalProps } from './components/ConfirmModal'

function Container() {
  const modal: ModalInstance<SuccessModalProps | ConfirmModalProps> = useModal()

  const handleShow = (name) => {
    modal.show(name, {
      title: name,
      content: '123123',
    })
  }

  return (
    <div className="container">
      <Button onClick={() => handleShow('CONFIRM_MODAL')}>show confirm</Button>
      <Button onClick={() => handleShow('SUCCESS_MODAL')}>show success</Button>
    </div>
  )
}

export default Container
