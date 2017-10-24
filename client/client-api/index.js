import request from 'superagent'
import {recievePings} from './pings'
import {receiveUsers} from './users'

import {showError} from '../actions/error.message'

export function getPingsRequest () {
  return dispatch => {
    request 
      .get('/api/v1/pings')
      .then(res => {
        dispatch(receivePings(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      }
  }
}

export function getUsersRequest () {
  return dispatch => {
    request
      .get('/api/v1/users')
      .then(res => {
        dispatch(receiveUsers(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
