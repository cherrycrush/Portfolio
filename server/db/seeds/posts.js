exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        // {
        //   id: 3,
        //   title: 'My database',
        //   dateCreated: new Date(Date.now()).toDateString(),
        //   paragraphs: JSON.stringify([
        //     "This blog is created with SQLite 3 and Knex.js as a query builder. I've got express routes written that talk make calls to fetch the posts from the database. Knex lets me write functions that request a JSON response"
        //   ])
        // },
        {
          id: 2,
          title: 'Weight lifting journey',
          dateCreated: new Date(Date.now()).toDateString(),
          paragraphs: JSON.stringify([
            "I've been training throughout the time gyms were closed, but not nearly as hard as when I had access to barbells and plates! Currently squatting a 1RM of 90kg, deadlifting 105kg, bench press 55kg. Aiming to hit a 60kg bench in a few months."
          ])
        },
        {
          id: 1,
          title: 'Best practice: "Class" and "id"',
          dateCreated: new Date(Date.now()).toDateString(),
          paragraphs: JSON.stringify([
            'This topic will illustrate the best practices of the class and id attributes - when and how to use them. CSS is a ruleset where certain elements will have precedence over others, hence the name "Cascading style sheets". An element defined with an id attribute will take precedence over the class attribute. Classes are a method for selecting multiple HTML elements and applying style properties across them all. Javascript and CSS can use these classes to manipulate more HTML elements at once.',
            'This offers you more flexibility, as you can have multiple HTML elements with the same class name. The id attribute is a method for selecting individual HTML elements. This is when you want to manipulate one specific element. These must have a unique name.'
          ])
        }
      ])
    })
}
