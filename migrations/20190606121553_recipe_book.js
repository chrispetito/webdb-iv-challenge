exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dishes", function(table) {
      table.increments();
      table
        .string("name")
        .notNullable()
        .unique();
    })
    .createTable("recipes", function(table) {
      table.increments();
      table
        .string("name")
        .notNullable()
        .unique();
      table
        .integer("dishes_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", function(table) {
      table.increments();
      table.string("name").notNullable();
    })
    .createTable("recipes_ingredients", function(table) {
      table.increments();
      table
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("dishes")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes_ingredients");
};
