const {generate} = require('./auth/hash')

const path = require('path')
const config = require(path.join(__dirname, './knexfile')).development
const knex = require('knex')(config)

function userExists (username) {
  return knex('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function createUser (username, password) {
  const passwordHash = generate(password)
  return knex('users')
    .insert({ username, hash: passwordHash })
}

function getUserByName (username, conn) {
  return knex('users')
    .select()
    .where('username', username)
    .first()
}

module.exports = {
  userExists,
  createUser,
  getUserByName
}
