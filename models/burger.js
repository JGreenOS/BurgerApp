//Reference the ORM to bring the functions for the database

const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burger', (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.create('burger', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.update('burger', objColVals, condition, (res) => cb(res));
    },
    delete(condition, cb) {
        orm.delete('burger', condition, (res) => cb(res));
    },
};

module.exports = burger;