import { combineReducers } from 'redux'
import { landing } from 'src/landing/reducers'

const appCombine = combineReducers({
  landing,
})

export type StoreState = ReturnType<typeof appCombine>
export default (state, action: any) => appCombine(state, action)
