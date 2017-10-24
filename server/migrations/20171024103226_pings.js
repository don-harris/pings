exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('pings', function (table) {
    table.increments().primary()
    table.integer('sender_id')
    table.integer('recipient_id')
    table.string('image_url')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('pings')
}
