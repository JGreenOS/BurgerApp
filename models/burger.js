const orm = require('../config/orm');
const burgers = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
    
    delete(condition, cb) {
        orm.delete('burgers', condition, (res) => cb(res));
      },

}
module.exports = burgers;