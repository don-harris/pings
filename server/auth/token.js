const jwt = require('jsonwebtoken')

const db = require('../db')

module.exports = {
  issue
}

function issue (req, res) {
  db.getUserByName(req.body.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function createToken (user, secret) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username
    },
    secret,
    {
      expiresIn: '1d'
    }
  )
}
