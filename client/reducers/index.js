import {combineReducers} from 'redux'

import errorMessage from './error-message'
import waiting from './waiting'
import users from './users'
import currentUser from './currentUser'
import pings from './pings'

export default combineReducers({
  errorMessage,
  waiting,
  users,
  currentUser,
  pings
})
