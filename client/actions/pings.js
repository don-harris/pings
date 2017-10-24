import request from 'superagent'
import {RECEIVE_PINGS} from '../actions/pings'

export const RECEIVE_PINGS = 'RECEIVE_PINGS'

export const recievePings = (pings) => {
  return {
    type: RECIEVE_PINGS,
    pings: pings
  }
}
