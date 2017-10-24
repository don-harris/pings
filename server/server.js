var path = require('path')
var express = require('express')
const bodyParser = require('body-parser')

var routes = require('./api-routes')
var server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

server.use('/api/v1', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
