
exports.up = function(knex) {
  return knex.schema.createTable('snacks', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.text('img_url').notNullable().defaultTo('')
    table.string('origin').notNullable().defaultTo('')
    table.text('review').notNullable().defaultTo('')
    table.integer('rating').notNullable().defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('snacks')
};
