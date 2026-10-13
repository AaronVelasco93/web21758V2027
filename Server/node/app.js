// Configuracion del servidor
// Importar el modulo de HTTP que viene incluido en Node.js
const http = require('http');

// definir un puerto
const port = 6001;

//crear el servidor

const server = http.createServer((req,res)=>{
    // extablecer el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola mundo');
});

// escuchar el puerto en especifico
server.listen(port,()=>{
    console.log(`Servidor ejecutando en: http://localhost:${port}`);
});