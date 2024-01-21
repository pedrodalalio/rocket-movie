exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id");
})

exports.down = function(knex) {
  
};
