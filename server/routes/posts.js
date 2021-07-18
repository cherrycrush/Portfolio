const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/Blog', (req, res) => {
  db.getAllPosts()
    .then(posts => {
      posts.map(post => { post.paragraphs = JSON.parse(post.paragraphs) })
      return res.json(posts)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
