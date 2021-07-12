const config = require('./knexfile').development
const database = require('knex')(config)

function getAllPosts (db = database) {
  return db('Posts').select('id', 'title', 'date_created as dateCreated', 'paragraphs')
}

module.exports = {
  getAllPosts
}
