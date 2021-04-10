require ('dotenv').config();

const mysql = require ("mysql2");
const { connect } = require('http2');

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DBNAME
});

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection; 