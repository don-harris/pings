import request from 'superagent'

export function getPings () {
  return request.get('/api/v1/pings')
}

export function savePing (ping) {
  return request.post('/api/v1/pings')
  .send(ping)
}
