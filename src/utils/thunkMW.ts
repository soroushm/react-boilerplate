'use strict'
import { MiddlewareAPI } from 'redux'
import actionTypes from 'src/landing/actionTypes'

export const sampleMiddleWare = ({ dispatch, getState }: MiddlewareAPI) => {
  return (next: Function) => async (action: any) => {
    const { type, number } = action
    const store = getState()
    if (type === actionTypes.DECREASE && number < 0) {
      dispatch({
        type: actionTypes.DECREASE_ERROR,
        error: `decrease not allowed! current value is: ${store.landing.number}`,
      })
    } else {
      next(action)
    }
  }
}
