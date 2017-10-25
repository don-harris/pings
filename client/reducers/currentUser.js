
const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.newUser
    default:
      return state
  }
}

export default currentUser
