/* global test, expect */
import {RECEIVE_PINGS}   from '../../client/actions/pings'
import pings from '../../client/reducers/pings'

test('pings reducer can receive an array of pings', () => {
  const action = {
    type: RECEIVE_PINGS,
    pings: [0,1,2]
  }
  const newState = pings([], action)
  expect(newState).toBe(action.pings)
})