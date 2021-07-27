exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('info').del()
    .then(function () {
      // Inserts seed entries
      return knex('info').insert([
        {
          id: 1,
          paragraph: "Kia ora! I'm Aaron. Currently making the leap into a new career in full stack web development. When I'm not working I'm outside, doing resistance training in the gym, collecting/restoring dress shoes and boots or hanging out with friends."
        },
        {
          id: 2,
          paragraph:
          'I am a web developer with an interest in crafting beautiful things. I have always had an interest in expressing myself creatively through building levels for games, creating sleek and responsive web pages. My working background has afforded me different experiences and challenges that have helped me grow as a person and with a growth mindset that will continue throughout my life.'
        },
        { id: 3, paragraph: 'rowValue3' }
      ])
    })
}
