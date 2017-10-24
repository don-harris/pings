import request from 'superagent'

export function getPings () {
  return request.get('/api/v1/pings')
}
