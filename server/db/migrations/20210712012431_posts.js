exports.up = (knex) => {
  knex.schema.createTable('Posts', (table) => {
    table.increments().primary()
    table.string('title')
    table.date('date_created')
    table.string('paragraphs')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Posts')
}
