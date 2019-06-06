const express = require('express')
const db = require('../models/dishes-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getDishes().then(response => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;