import React, { Fragment } from 'react'
import { useModal } from '../../src'

function Container() {
  const modal: any = useModal()

  const handleShow = () => {
    modal.show('CONFIRM_MODAL')
  }

  const handleHide = () => {
    modal.hide()
  }

  return (
    <Fragment>
      <button onClick={handleShow}>show modal</button>
      <button onClick={handleHide}>hide modal</button>
    </Fragment>
  )
}

export default Container
