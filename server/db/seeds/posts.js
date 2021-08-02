exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          title: 'Best practice: "Class" and "id"',
          dateCreated: new Date(Date.now()).toDateString(),
          paragraphs: JSON.stringify([
            'This topic will illustrate the best practices of the class and id attributes - when and how to use them. CSS is a ruleset where certain elements will have precedence over others, hence the name "Cascading style sheets". An element defined with an id attribute will take precedence over the class attribute. Classes are a method for selecting multiple HTML elements and applying style properties across them all. Javascript and CSS can use these classes to manipulate more HTML elements at once.',
            'This offers you more flexibility, as you can have multiple HTML elements with the same class name. The id attribute is a method for selecting individual HTML elements. This is when you want to manipulate one specific element. These must have a unique name.'
          ])
        },
        {
          id: 2,
          title: 'Blog title2',
          dateCreated: new Date(Date.now()).toDateString(),
          paragraphs: JSON.stringify([
            'paragraph 1 here',
            'paragraph 2 here'
          ])
        },
        {
          id: 3,
          title: 'Blog title3',
          dateCreated: new Date(Date.now()).toDateString(),
          paragraphs: JSON.stringify([
            'paragraph 1 here',
            'paragraph 2 here'
          ])
        }
      ])
    })
}
