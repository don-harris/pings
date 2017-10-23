const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.json({status: 'API is online'})
})

module.exports = router
