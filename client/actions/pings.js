import request from 'superagent'

export const RECEIVE_PINGS = 'RECEIVE_PINGS'

export const recievePings = (pings) => {
  return {
    type: RECIEVE_PINGS,
    pings: pings
  }
}
