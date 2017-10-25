import request from 'superagent'

export function getPings () {
  return request.get('/api/v1/pings')
}

export function putUserProfile (id, data) {
  return request.put('/api/v1/users/' + id)
    .send(data)
export function savePing (ping) {
  return request.post('/api/v1/pings')
  .send(ping)
}
