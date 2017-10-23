var path = require('path')
var express = require('express')

var routes = require('./routes')
var server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', routes)

module.exports = server
