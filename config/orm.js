//import MYsqL connection
const { query } = require('./connection.js');
const connection = require('./connection.js');

//helper function for SQL syntax for question marks in queries
const printQuestionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++)
    {
        arr.push('?');
    }
    return arr.toString();

};

//helper function to take object key/value pairs to SQL
const objToSQL = (ob) => {
    const arr = [];
        for (const key in ob) {
            let value = ob[key];
            //skip hidden properties, if they exist
            if (Object.hasOwnProperty.call(ob, key)){
                //add quotes to strings that may have spaces
                if (typeof value === 'string' && value.indexOf(' ') >= 0){
                    value = `'${value}`;
                }
                arr.push(`${key} =${value}`);
            }
        }
        //translate the array into a csv string
return arr.toString();
};

//object for SQL statement functions

const orm = {
all(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }
        cb(result);
    });
},
//create
create (table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;
    queryString += '  (';
    queryString += cols.toString();
    queryString += ')  ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ')  ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
        if (err) {
            throw err;
        }
    cb(result);
    });
},
    //update
update(table, objColVals, condition, cb){
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSQL(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, results) => {
        if (err) {
            throw err;
        }
    cb(result);
    });
},
  //delete
delete(table, condition, cb) {
let queryString = `DELETE FROM ${table}`;
queryString += ' WHERE ';
queryString += condition;

connection.query(queryString, (err, result) => {
    if (err) {
        throw err;
    }
    cb(result);
});

},

};
//export the orm to the model for burgers   
module.exports = orm; 