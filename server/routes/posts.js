const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('hitting this route')
  db.getAllPosts()
    .then(posts => {
      return res.json(posts)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
