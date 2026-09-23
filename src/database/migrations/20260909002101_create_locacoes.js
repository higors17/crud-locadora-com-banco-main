/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("locacoes", (table) => {
    table.increments("id").primary()

    // relações
    table.integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes")
        
    table.integer("filme_id")
        .unsigned()
        .references("id")
        .inTable("filmes")

    table.date("alugado_em").notNullable()
    table.date("devolvido_em")

    table.timestamps(true, true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("locacoes")
};
