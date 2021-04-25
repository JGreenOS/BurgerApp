const mysql = require('mysql2');
require('dotenv').config();
var connection = mysql.createConnection(process.env.JAWSDB_URL);

// const connection = mysql.createConnection({
//     host:process.env.HOST,
//     user:process.env.USER,
//     password:process.env.PASSWORD,
//     database:process.env.DBNAME
// });
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: '5jkhxtu2',
//         database: 'burgers_db',
// });
// }

connection.connect((err) => {
    if (err) {
        console.error(`Error Connecting: ${err.stack}`);
        return;
}
console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;