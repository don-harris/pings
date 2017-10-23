import {SHOW_ERROR} from '../actions/error-message'

const waiting = (state = false, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
