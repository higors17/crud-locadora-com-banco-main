/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table("filmes", (table) => {
    table.dropColumn("genero_id")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table("filmes", (table) => {
    table.integer("genero_id")
  })
};

exports.config = {
  transaction: false
}