const db = require('../dbconfig')

module.exports = {
    getDishes
}

function getDishes() {
    return db('dishes')
}