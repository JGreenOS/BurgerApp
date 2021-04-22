const mysql = require('mysql');
const { connect } = require('../controllers/burger_controllers.js');

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '5jkhxtu2',
        database: 'burgers_db',
});
}

connection.connect((err) => {
    if (err) {
        console.error(`Error Connecting: ${err.stack}`);
        return;
}
console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;