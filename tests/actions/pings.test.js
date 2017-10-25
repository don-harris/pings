/* global expect, test */
import {RECEIVE_PINGS, receivePings} from '../../client/actions/pings'

test('testing that receive pings receives pings', () => {
  const pings = [0, 1, 2]
  const action = receivePings(pings)
  expect(action.type).toBe(RECEIVE_PINGS)
  expect(action.pings).toEqual(pings)
})
