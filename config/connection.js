const mysql = require('mysql2');
require('dotenv').config();
console.log("URL", process.env.JAWSDB_URL);
var connection = mysql.createConnection(process.env.JAWSDB_URL);



connection.connect((err) => {
    if (err) {
        console.error(`Error Connecting: ${err.stack}`);
        return;
}
console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;