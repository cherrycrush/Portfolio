const config = require('./knexfile').development
const db = require('knex')(config)

function getAllPosts (database = db) {
  return database('posts')
    .select('id', 'title', 'dateCreated', 'paragraphs')
}

function getHomeInfo (database = db) {
  return database('info')
    .select('id', 'paragraph')
}

module.exports = {
  getAllPosts,
  getHomeInfo
}
