'use strict'
import actionTypes from './actionTypes'

interface InterfaceLandingState {
  number: number
}

const landingState: InterfaceLandingState = {
  number: 0,
}

export const landing = (state: InterfaceLandingState = landingState, { type, action }) => {
  switch (type) {
    case actionTypes.INCREASE:
      return {
        ...state,
        number: ++state.number,
      }
    case actionTypes.DECREASE:
      return {
        ...state,
        number: --state.number,
      }
    default:
      return state
  }
}
