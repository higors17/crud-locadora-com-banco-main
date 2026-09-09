/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     return knex.schema.createTable("filmes_generos", (table) => {
    table.increments("id").primary()

     table.integer("filme_id")
    .unsigned()
    .notNullable()
    .references("")
    .inTable("filmes")
    .onDelete("CASCADE")

      table.integer("genero_id")
    .unsigned()
     .notNullable()
    .references("")
    .inTable("generos")
    .onDelete("CASCADE")

  
})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
