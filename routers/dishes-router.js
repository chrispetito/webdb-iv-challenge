const express = require("express");
const db = require("../models/dishes-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getDishes()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  db.getDish(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id/recipes", (req, res) => {
  db.getDishRecipes(req.params.id)
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({ message: "Dish not found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.addDish(req.body)
    .then(dish => {
      res.status(201).json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
