import request from 'superagent'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const recieveUsers = (users) => {
  return {
    type: RECIEVE_USERS,
    users: users
  }
}
