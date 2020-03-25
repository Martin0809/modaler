import React from 'react'
import { Button } from 'antd'
import { useModal } from '../../src'

function Container() {
  const modal: any = useModal()

  const handleShow = name => {
    modal.show(name, {
      title: name
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
