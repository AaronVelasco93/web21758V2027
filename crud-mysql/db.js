require('dotenv').config(); 
//  Carga las variables de entorno definidas en el archivo .env (como DB_HOST, DB_USER, etc.)

const mysql = require('mysql2'); 
// Importa el módulo mysql2 para poder conectarse a bases de datos MySQL

const connection = mysql.createConnection({
  host: process.env.DB_HOST,        //  Dirección del servidor de base de datos (ej. 127.0.0.1)
  user: process.env.DB_USER,        //  Usuario de la base de datos (ej. root)
  password: process.env.DB_PASSWORD,//  Contraseña del usuario
  database: process.env.DB_NAME,    //  Nombre de la base de datos (ej. crud_db)
  port: process.env.DB_PORT         //  Puerto de conexión 
});

connection.connect(err => {
  if (err) throw err;                         //  Si hay error, lo lanza y detiene la ejecución
  console.log(' Conectado a MySQL');         // Muestra mensaje si la conexión fue exitosa
});

module.exports = connection; 
//  Exporta la conexión para usarla en otras partes del proyecto (como rutas o app.js)
