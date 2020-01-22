import { applyMiddleware, compose, createStore } from 'redux'
import { Middleware } from 'redux'
import { logger } from 'redux-logger'
import rootReducer from './rootReducers'

export const middleware: Middleware[] = []

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const composedEnhancers = compose(applyMiddleware(...middleware))

export const store = createStore(rootReducer, composedEnhancers)
