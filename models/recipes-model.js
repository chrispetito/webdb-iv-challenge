const db = require("../dbconfig");

module.exports = {
  getRecipes,
  addRecipe
};

function getRecipes() {
  return db("recipes");
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
}