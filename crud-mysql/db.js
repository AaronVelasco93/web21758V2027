require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST, //127.0.0.1
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //Aaron123
    database: process.env.DB_NAME, //crud_db
    port: process.env.DB_PORT //3306
});

connection.connect(err=>{
    if(err)throw err;
    console.log("Conectado a MySQL");
});
module.exports = connection;
