import data from '../../data.js'
import {RECEIVE_PINGS} from '../actions/pings.js'

export default function pings (state = [], action) {
  switch (action.type) {
    case RECEIVE_PINGS:
      return [...action.pings]

    default:
      return state
  }
}
