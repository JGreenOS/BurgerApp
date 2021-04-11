require ('dotenv').config();
const mysql = require ('mysql');
var connection;

if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host:'localhost',
    user:'DevJulia',
    password:'password',
    database:'burger_db'
});
};

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection; 