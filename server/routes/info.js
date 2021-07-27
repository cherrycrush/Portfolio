const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('hitting info route')
  db.getHomeInfo()
    .then(info => {
      return res.json(info)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
