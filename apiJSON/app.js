const express = require('express'); // crear el servidor
const fs = require('fs');//leer y escribir archivos
const path = require('path'); //rutas absolutas
const app = express(); // instancia principal

//Ruta absoluta para interpretar JSON  donde guardamos los archivos
const DATA_FILE = path.join(__dirname, 'data.json');

//Milddleware para interpretar JSON en las solicitudes (req.body)
app.use(express.json());

//Servir archivos estaticos (HTML, CSS y JS entre otros), desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//Leer ususarios desde el JSON
app.get('/api/usuarios',(req,res)=>{
    const data = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(data));
});

//Ruta: post agregar usuario
app.post('/api/usuarios',(req,res)=>{
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const nuevo = req.body;
    /*
    nuevo{
        id: ?
        nombre: Aaron
        correo: aron@gmail.com
    }*/
   nuevo.id = data.length > 0 ? data[data.length -1].id + 1 : 1 ; //generar ID incremental
   data.push(nuevo);

    fs.writeSync(DATA_FILE, JSON.stringify(data,null,2));
    res.json({mensaje: 'Usuario Agregado'});

});

//Ruta Put : Editar usuario por ID
app.put('/api/usuarios/:id',(req,res)=>{
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const id = parseInt(req.params.id);
    const index = data.findIndex( u => u.id === id);
    
    if(index !== -1){
        
    }else{
        res.status(404).json({error: 'usuarios no encontrado'});
    }

});



