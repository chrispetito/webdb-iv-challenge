
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipes_id: 1, ingredients_id: 1,  quantity: 1 },
        {recipes_id: 1, ingredients_id: 2,  quantity: 1 },
        {recipes_id: 1, ingredients_id: 3,  quantity: 1 }
      ]);
    });
};
