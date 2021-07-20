exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          title: 'Blog title',
          dateCreated: new Date(Date.now()),
          paragraphs: 'post here'
        },
        {
          id: 2,
          title: 'Blog title2',
          dateCreated: new Date(Date.now()),
          paragraphs: 'post here2'
        },
        {
          id: 3,
          title: 'Blog title3',
          dateCreated: new Date(Date.now()),
          paragraphs: 'post here3'
        }
      ])
    })
}
