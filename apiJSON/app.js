// app.js - Servidor Express para manejar operaciones CRUD sobre un archivo JSON

const express = require('express');             // Framework para crear el servidor y definir rutas
const fs = require('fs');                       // Módulo para leer y escribir archivos
const path = require('path');                   // Módulo para manejar rutas absolutas
const app = express();                          // Instancia principal de la aplicación Express

// Ruta absoluta al archivo JSON donde se guardan los usuarios
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware para interpretar JSON en las solicitudes (req.body)
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS) desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta GET: Leer usuarios desde el archivo JSON
app.get('/api/usuarios', (req, res) => {
  const data = fs.readFileSync(DATA_FILE);         // Lee el archivo de forma sincrónica
  res.json(JSON.parse(data));                      // Convierte el contenido a JSON y lo responde
});

// Ruta POST: Agregar nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));  // Lee y convierte los datos actuales
  const nuevo = req.body;                                 // Obtiene los datos enviados desde el cliente
  nuevo.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;  // Genera ID incremental
  data.push(nuevo);                                       // Agrega el nuevo usuario
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));     // Escribe el archivo actualizado
  res.json({ mensaje: 'Usuario agregado' });
});

// Ruta PUT: Editar usuario por ID
app.put('/api/usuarios/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));  // Lee datos actuales
  const id = parseInt(req.params.id);                   // Obtiene el ID desde la URL
  const index = data.findIndex(u => u.id === id);       // Busca la posición del usuario en el array
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };      // Actualiza los campos enviados
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2)); // Guarda cambios
    res.json({ mensaje: 'Usuario actualizado' });
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

// Ruta DELETE: Eliminar usuario por ID
app.delete('api/usuarios//:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync(DATA_FILE));    // Lee el contenido del JSON
  const id = parseInt(req.params.id);                   // Extrae el ID desde la URL
  data = data.filter(u => u.id !== id);                 // Filtra todos menos el que se elimina
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2)); // Escribe el nuevo contenido
  res.json({ mensaje: 'Usuario eliminado' });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3005;
app.listen(PORT, () => {
  console.log('Servidor corriendo en http://localhost:' + PORT);
});
