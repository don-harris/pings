/* global test, expect */
import {SHOW_ERROR} from '../../client/actions/error-message'
import errorMessage from '../../client/reducers/error-message'

test('errorMessage return the error message during SHOW_ERROR', () => {
  const action = {
    type: SHOW_ERROR,
    errorMessage: 'test error message'
  }
  const newState = errorMessage('', action)
  expect(newState).toBe(action.errorMessage)
})

// var actual = errorMessage(null, {type: 'SHOW_ERROR', errorMessage: 'test this'})
// expect(actual).toBe('test this')