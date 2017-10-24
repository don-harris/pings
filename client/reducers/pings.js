import data from '../../data.js'
import {RECEIVE_PINGS} from '../actions/users.js'

export default function pings (state = data.pings, action) {
  switch (action.type) {
    case RECEIVE_PINGS:
      return action.pings

    default:
      return state
  }
}
