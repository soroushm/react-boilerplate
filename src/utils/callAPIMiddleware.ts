'use strict'
import { MiddlewareAPI } from 'redux'
import { StoreState } from 'src/rootReducers'

export interface InterfaceActionCreator {
  PENDING: string
  SUCCESS: string
  FAILURE: string
}
export const actionCreator = (typeName: string): InterfaceActionCreator => ({
  PENDING: `${typeName}_PENDING`,
  SUCCESS: `${typeName}_SUCCESS`,
  FAILURE: `${typeName}_FAILURE`,
})

export const callAPIMiddleware = ({ dispatch, getState }: MiddlewareAPI) => {
  return (next: Function) => async (action: any): Promise<number> => {
    const shouldCallAPIFN = (store?: StoreState) => !!store
    const { type, callAPI, shouldCallAPI = shouldCallAPIFN } = action

    if (!callAPI) {
      return next(action)
    }
    const store = getState()
    const { PENDING, SUCCESS, FAILURE } = type
    dispatch({ type: PENDING })
    if (!shouldCallAPI(store)) {
      dispatch({
        type: FAILURE,
        error: 'API call not allowed.',
      })
      return Promise.reject(Error('API call not allowed.'))
    }

    return callAPI(store)
      .then((response: any) => {
        dispatch({
          type: SUCCESS,
          response,
        })
        return Promise.resolve(response)
      })
      .catch((error: any) => {
        dispatch({
          type: FAILURE,
          error,
        })
        return Promise.reject(error)
      })
  }
}
