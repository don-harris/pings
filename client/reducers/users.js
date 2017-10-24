import data from '../../data.js'
// import {RECIEVE_USERS} from '../actions/users'

const users = (state = data.users, action) => {
  switch (action.type) {
    // case RECIEVE_USERS:
    //   return action.users
    default:
      return state
  }
}

export default users
