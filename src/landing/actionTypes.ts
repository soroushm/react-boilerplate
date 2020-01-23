import { actionCreator, InterfaceActionCreator } from 'src/utils/callAPIMiddleware'

interface InterfaceAuthActions {
  INCREASE: string
  DECREASE: string
  DECREASE_ERROR: string
  CHANGE_STATE: InterfaceActionCreator
}

const actionTypes: InterfaceAuthActions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  DECREASE_ERROR: 'DECREASE_ERROR',
  CHANGE_STATE: actionCreator('CHANGE_STATE'),
}

export default actionTypes
