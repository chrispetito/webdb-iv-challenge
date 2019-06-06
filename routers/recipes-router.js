const express = require('express')
const db = require('../models/recipes-model')

const router = express.Router()

router.get('/', (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    db.addRecipe(req.body)
    .then(recipe => {
        res.status(201).json(recipe)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;