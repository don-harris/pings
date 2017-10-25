import {KIOSK_ON, KIOSK_OFF} from '../actions/kiosk-mode'

const kiosk = (state = false, action) => {
  switch (action.type) {
    case KIOSK_ON:
      return true
    case KIOSK_OFF:
      return false
    default:
      return state
  }
}

export default kiosk
