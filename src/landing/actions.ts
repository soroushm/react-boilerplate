import request from 'src/utils/request'
import actionTypes from './actionTypes'

interface InterfacePostNumberState {
  type: string
  number: number
}
export const postNumberState = (data: InterfacePostNumberState) => ({
  type: actionTypes.CHANGE_STATE,
  callAPI: (state) => request(state).post('number-state/', data), // request is instance of axios so you dont need each time send config
})
