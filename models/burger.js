//Reference the ORM to bring the functions for the database

const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burger', (res) => cb(res));
    },
    create(burgerName, callback) {
        orm.create('burger', burgerName, false, (res) =>callback(res));
    },
    update(objColVals, id, callback) {
        orm.update('burger', objColVals, id, (res) =>callback(res));
    },
}

module.exports = burger;