
import {RECEIVE_PINGS, POST_PING} from '../actions/pings.js'

export default function pings (state = [], action) {
  switch (action.type) {
    case RECEIVE_PINGS:
      return action.pings
    default:
      return state
  }
}
