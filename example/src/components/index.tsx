import { lazy } from 'react'

export default {
  CONFIRM_MODAL: lazy(() =>
    import(/* webpackChunkName: "confirm-modal"*/ './ConfirmModal')
  ),
  SUCCESS_MODAL: lazy(() =>
    import(/* webpackChunkName: "success-modal"*/ './SuccessModal')
  )
}
