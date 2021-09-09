
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipies', tbl => {
        tbl.increments()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
    })
    .createTable('steps', tbl => {
        tbl.increments()
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipies')
};