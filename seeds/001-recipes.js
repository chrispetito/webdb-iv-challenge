
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Pro', dishes_id: 1},
        {name: 'Granny', dishes_id: 2},
        {name: 'Food Truck', dishes_id: 3}
      ]);
    });
};
