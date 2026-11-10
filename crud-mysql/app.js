require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

//Importar el archivo de rutas donde se manejan las operaciones del crud para el usuario
const userRoutes = require('./routes/user');

//Configurar motor de plantilla EJS
app.set('view egine','ejs');

app.set('views', path.join(__dirname,'views'));

//middleware que permite leer los datos enviados desde el formulario HTML (formulario que pasa por metodo post)
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/',userRoutes);

const PORT = process.env.PORT || 4500;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});

