const path = require('path')
const config = require(path.join(__dirname, './knexfile')).development
const knex = require('knex')(config)

function getUsers () {
  return knex('users')
    .select('id', 'name', 'username', 'photo_url as photoUrl')
}

function getPings () {
  return knex('pings')
    .join('users as senders', 'pings.sender_id', 'senders.id')
    .join('users as recipients', 'pings.recipient_id', 'recipients.id')
    .select('pings.id as id', 'senders.id as senderId', 'senders.photo_url as senderPhoto', 'recipients.id as recipientId', 'recipients.photo_url as recipientPhoto', 'pings.image_url as image')
}

function saveUser ({name, username, password, photoUrl}) {
  return knex('users')
    .insert({
      name: name,
      username: username,
      hash: password,
      photo_url: photoUrl
    })
}

function savePing ({senderId, recipientId, imageUrl}) {
  return knex('pings')
    .insert({
      sender_id: senderId,
      recipient_id: recipientId,
      image_url: imageUrl
    })
}

module.exports = {
  getUsers,
  getPings,
  saveUser,
  savePing
}
