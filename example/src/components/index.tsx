import { lazy } from 'react'
import SuccessModal from './SuccessModal'

export default {
  CONFIRM_MODAL: lazy(
    () => import(/* webpackChunkName: "confirm-modal"*/ './ConfirmModal')
  ),
  SUCCESS_MODAL: SuccessModal,
}
