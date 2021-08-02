const config = require('./knexfile').development
const db = require('knex')(config)

function getAllPosts (database = db) {
  return database('posts').select('id', 'title', 'dateCreated', 'paragraphs')
    .then(posts => {
      return posts.map(post => {
        post.paragraphs = JSON.parse(post.paragraphs)
        return post
      })
    })
}

module.exports = {
  getAllPosts
}
