import { createStore as createReduxStore } from 'redux'
import rootReducer from '../reducers'

const createStore = (initialState) => {
  const store = createReduxStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOS_EXTENSION__ &&
    window.__REDUX_DEVTOOS_EXTENSION__(),
  )
  return store
}

export { createStore }
