import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import pings from './pings'

export default combineReducers({
  errorMessage,
  waiting,
  pings
 
})