const sodium = require('sodium').api

function generate (password) {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str(
    passwordBuffer,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
}

module.exports = {
  generate
}

// step6 Auth: didnt test auth post route cos db functions didnt exist yet. give it a go with postman
// step9 Auth: need to call generate from db.createUser function, importing hash into db.js
// step14 Auth: need to sort db function getUserByName.