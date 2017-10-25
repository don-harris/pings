/* global expect, test */  
import {SHOW_ERROR, showError} from '../../client/actions/error-message'

test('that an error message shows when an error occurs', () => {
  const errorMessage = 'test error'
  const action = showError(errorMessage)
  expect(action.errorMessage).toBe(errorMessage)
  expect(action.type).toBe(SHOW_ERROR)
})
