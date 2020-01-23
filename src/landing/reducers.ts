'use strict'
import actionTypes from './actionTypes'

interface InterfaceLandingState {
  number: number
  error: string
  loading: boolean
}

const landingState: InterfaceLandingState = {
  number: 0,
  error: '',
  loading: false,
}

export const landing = (
  state: InterfaceLandingState = landingState,
  { type, number, response, error }
): InterfaceLandingState => {
  switch (type) {
    case actionTypes.INCREASE:
    case actionTypes.DECREASE:
      return {
        ...state,
        number,
        error: '',
      }
    case actionTypes.DECREASE_ERROR:
      return {
        ...state,
        error,
      }
    case actionTypes.CHANGE_STATE.SUCCESS:
      return {
        ...state,
        number: response.data,
        error: '',
        loading: false,
      }
    case actionTypes.CHANGE_STATE.FAILURE:
      return {
        ...state,
        error: error.message,
        loading: false,
      }
    case actionTypes.CHANGE_STATE.PENDING:
      return {
        ...state,
        error: '',
        loading: true,
      }
    default:
      return state
  }
}
