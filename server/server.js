const path = require('path')
const express = require('express')

const server = express()

const posts = require('./routes/posts')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/posts', posts)
server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
