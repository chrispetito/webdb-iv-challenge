const db = require("../dbconfig");

module.exports = {
  getDishes,
  getDish,
  getDishRecipes,
  addDish
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
    return db('dishes')
    .where({ id })
    .first()
}

function getDishRecipes(id) {
  return db("recipes")
    .join('dishes', 'dishes.id', 'recipes.dishes_id')
    .select('recipes.id', 'recipes.name')
    .where('recipes.dishes_id', id)
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
}
