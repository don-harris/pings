const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

const db = {}

router.use(bodyParser.json())

router.get('/users', (req, res) => {
  db.getUsers()
    .then(result => res.json(result))
    .catch(() => {
      res.status(500).end()
    })
})

router.get('/pings', (req, res) => {
  db.getPings()
    .then(result => res.json(result))
    .catch(() => {
      res.status(500).end()
    })
})

router.post('/users', (req, res) => {
  const user = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    photoUrl: req.body.photoUrl
  }
  db.saveUser(user)
    .then(ids => {
      res.json({
        newId: ids[0]
      })
    })
    .catch(() => {
      res.status(500).end()
    })
})

router.post('/pings', (req, res) => {
  const ping = {
    senderId: req.body.senderId,
    recipientId: req.body.recipientId,
    imageUrl: req.body.imageUrl
  }
  db.saveUser(ping)
    .then(ids => {
      res.json({
        newId: ids[0]
      })
    })
    .catch(() => {
      res.status(500).end()
    })
})

router.post('/auth/register', (req, res) => {
  const {username, password, name, photo_url} = req.body
  db.userExists(username)
    .then(username => {
    
      
    })
})

module.exports = router
