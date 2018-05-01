import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from '../reducer'

const middleware = applyMiddleware(thunk)

export default createStore(RootReducer, middleware)
