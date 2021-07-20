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
          paragraphs:
            'This topic will illustrate the best practices of the class and id attributes - when and how to use them. CSS is a ruleset where certain elements will have precedence over others, hence the name "Cascading style sheets". An element defined with an id attribute will take precedence over the class attribute.'
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
