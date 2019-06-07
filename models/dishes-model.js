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

async function getDish(id) {
  const dish = await db("dishes")
    .where({ id })
    .first();
  const recipes = await db("dishes")
    .join("recipes", "recipes.dishes_id", "dishes.id")
    .where("dishes.id", id);
  // console.log(recipes)
  return { ...dish, recipes };
}

function getDishRecipes(id) {
  const recipes = db("dishes")
    .join("recipes", "recipes.dishes_id", "dishes.id")
    .where("dishes.id", id);
  return recipes;
}

function addDish(dish) {
  return db("dishes").insert(dish);
}
