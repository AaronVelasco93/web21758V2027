const express = require('express');
// crear una instancia de express
const app = express();
// definicion de puerto
const port = 3009;

app.use(express.static('public'));

// ruta principal que nos ayuda en la pagina web de inicio
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

// nueva ruta que sirve a la pagina de datos de nuestro sitio
app.get('/datos',(req,res)=>{
    res.sendFile(__dirname + '/public/datos.html');
});

// iniciar server
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});