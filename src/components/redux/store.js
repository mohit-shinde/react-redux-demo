import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { BbReducer } from './BreakingBad/BbReducer';
const store=createStore(BbReducer,applyMiddleware(logger,thunk))

export default store
