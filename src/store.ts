import { applyMiddleware, compose, createStore } from 'redux'
import { Middleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import { sampleMiddleWare } from 'src/utils/thunkMW'
import rootReducer from './rootReducers'

export const middleware: Middleware[] = [thunk, sampleMiddleWare]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const composedEnhancers = compose(applyMiddleware(...middleware))

export const store = createStore(rootReducer, composedEnhancers)
