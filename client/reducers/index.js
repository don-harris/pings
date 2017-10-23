import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import users from './users'

export default combineReducers({
  errorMessage,
  waiting,
  users
})
