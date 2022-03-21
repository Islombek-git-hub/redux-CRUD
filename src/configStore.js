import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducers from './reducers'


export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger)) )
 