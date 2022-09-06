const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllPosts()
    .then(posts => res.json(posts))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
 