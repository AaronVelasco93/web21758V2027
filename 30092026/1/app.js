// Array donde se  guardaron los usuarios
const usuarios = [];

// Obtener datos del formulario, (area y salida en variables)
const form = document.getElementById('userForm');
const salida= document.getElementById('salidaJSON');

form.addEventListener('submit',function(e){
    e.preventDefault();//evita que se recargue la pagina

    //obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    
    //crear Objeto
    const nuevoUsuario={
        nombre: nombre,
        correo: correo
    };

    // Guardar el objeto
    usuarios.push(nuevoUsuario);
    //  Mostrar el JSON  en pantalla (formato)
    salida.textContent= JSON.stringify(usuarios,null,2);

    form.reset();

});