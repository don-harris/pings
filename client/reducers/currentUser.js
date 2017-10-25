const initialState = require('../utils/auth').getUserTokenInfo()

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default currentUser
