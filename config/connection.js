require ('dotenv').config();
const mysql = require ('mysql');
var connection;

if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'5jkhxtu2',
    database: 'u9zydv5t5kdsezuy'
});
};

// connection.connect((err) => {
//     if (err) {
//         console.error(`Error connecting: ${err.stack}`);
//         return;
//     }
//     console.log(`Connected as id ${connection.threadId}`);
// });

module.exports = connection; 