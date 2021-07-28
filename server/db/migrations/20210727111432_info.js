exports.up = (knex) => {
  return knex.schema.createTable('info', (table) => {
    table.increments().primary()
    table.text('paragraph')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('info')
}
