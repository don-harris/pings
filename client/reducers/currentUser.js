import data from '../../data'

const currentUser = (state = data.users[0], action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.newUser
    default:
      return state
  }
}

export default currentUser
