
const connection = require('./connection.js');

// //helper function for SQL syntax for question marks in queries
// const printQuestionMarks = (num) => {
//      const arr = [];
//      for (let i = 0; i < num; i++) {

//          arr.push('?');
//      }
//      return arr.toString();

//  };

 //helper function to take object key/value pairs to SQL
 const objToSql = (ob) => {
     const arr = [];
         for (const key in ob) {
             let value = ob[key];
             //skip hidden properties, if they exist
             if (Object.hasOwnProperty.call(ob, key)){
                 //add quotes to strings that may have spaces
                 if (typeof value === 'string' && value.indexOf(' ') >= 0){
                     value = `'${value}'`;
                 }
                 arr.push(`${key}=${value}`);
             }
         }
         //translate the array into a csv string
    return arr.toString();
 };

//object for SQL statement functions

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
},
  // An example of objColVals would be {name: hamburglar, devoured: true}
updateOne(table, objColVals, condition, cb){
   let queryString = `UPDATE ${table}`;

   queryString += ' SET ';
   queryString += objToSql(objColVals);
   queryString += ' WHERE id=';
   queryString += condition;

    console.log(queryString);
    console.log("ObjColVals", objColVals);
    connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }
    cb(result);
     })

}
}

//export the orm to the model for burgers   
module.exports = orm; 