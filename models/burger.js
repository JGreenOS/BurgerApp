//Reference the ORM to bring the functions for the database

const orm = require('../config/orm');

const burger = {
    all(cb) {
        orm.selectAll('burger', (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.insertOne('burger', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.updateOne('burger', objColVals, condition, (res) => cb(res));
    },
}

module.exports = burger;