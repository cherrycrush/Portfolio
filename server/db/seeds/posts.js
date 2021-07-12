exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Posts').insert([
        {
          id: 1,
          title: 'rowValue1',
          date_created: new Date(Date.now()),
          paragraphs: JSON.stringify([
            'This topic will illustrate the best practices of the class and id attributes - when and how to use them. CSS is a ruleset where certain elements will have precedence over others, hence the name "Cascading style sheets". An element defined with an id attribute will take precedence over the class attribute.'
          ])
        },
        {
          id: 2,
          title: 'rowValue2',
          date_created: new Date(Date.now()),
          paragraphs: JSON.stringify([
            'Lorem ipsum'
          ])
        }
      ])
    })
}
