const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

const db = {}

router.use(bodyParser.json())

router.get('/users', (req, res) => {
  db.getUsers()
    .then(result => res.json(result))
})

router.get('/pings', (req, res) => {
  db.getPings()
    .then(result => res.json(result))
})

router.post('/users', (req, res) => {
  const user = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    photoUrl: req.body.photoUrl
  }
  db.saveUser(user)
    .then(data => {
      res.json(data)
    })
})

router.post('/pings', (req, res) => {
  const ping = {
    senderId: req.params.senderId,
    recipientId: req.params.recipientId,
    imageUrl: req.body.imageUrl
  }
  db.saveUser(ping)
    .then(data => {
      res.json(data)
    })
})

module.exports = router
