'use strict'
import actionTypes from './actionTypes'

interface InterfaceLandingState {
  number: number
  error: string
}

const landingState: InterfaceLandingState = {
  number: 0,
  error: '',
}

export const landing = (
  state: InterfaceLandingState = landingState,
  { type, number, error }
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
    default:
      return state
  }
}
