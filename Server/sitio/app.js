// importar modulos
const express = require('express');
const path    = require('path');
// crear una instancia
const app = express();

const port = 3006;

// ruta para servir la pagina HTML
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));

});
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});