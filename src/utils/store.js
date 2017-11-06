import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers/index'
import thunk from 'redux-thunk'

export default (initialState = {}) => {
  // Create the store with middlewares
  const middlewares = [
    thunk
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    reducers
    , initialState
    , compose(...enhancers)
  )

  // Extensions
  store.asyncReducers = {} // Async reducer registry

  return store
}