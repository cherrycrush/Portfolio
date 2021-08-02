exports.up = (knex) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments().primary()
    table.string('title')
    table.date('dateCreated')
    table.string('paragraphs')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('posts')
}
