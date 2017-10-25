/* global test, expect */
import {SHOW_ERROR}   from '../../client/actions/error-message'
import waiting from '../../client/reducers/waiting'

test('waiting returns the error message during SHOW_ERROR', () => {
  const action = {
    type: SHOW_ERROR
  }
  const newState = waiting(true, action)
  expect(newState).toBe(false)
})