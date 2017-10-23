
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table) {
    table.increments().primary()
    table.string('name')
    table.string('username')
    table.string('hash')
    table.string('photo_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
