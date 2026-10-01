// Referencia del formulario, salida y el boton
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargaBtn = document.getElementById('descargarBtn');

//inicializar el arreglo para los usuarios desde el localStorage

let usuarios= JSON.parse(localStorage.getItem('usuarios'))||[];

//mostrar los usuarios gurdados en pantalla (si tenemos)
mostrarUsuarios();

//evento cuando se envia del formulario
form.addEventListener('submit',function(e){
    e.preventDefault();

    // obtener los valores ingresados del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

    // crear el objeto para agregar usuarios
    const nuevoUsuario={
        nombre: nombre,
        correo: correo
    };
    // agregamos al array
    usuarios.push(nuevoUsuario);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
    // mostrar usuarios
    mostrarUsuarios();

    // limpiar Formulario
    form.reset();

});

function mostrarUsuarios(){
    salida.textContent= JSON.stringify(usuarios,null,2);

}

descargaBtn.addEventListener('click',function(){
    // convertir el array, de objetos a texto JSON
    const contenidoJSON = JSON.stringify(usuarios,null,2);

    // create el objeto Blob con el contenido
    const blob = new Blob([contenidoJSON], {type :"aplication/json"});

    // crear una URL temporal que apunte a el Blob
    const url = URL.createObjectURL(blob);

    // crear un enlace <a> invisible para forzar la descarga
    const enlace = document.createElement('a');
    enlace.href=url;
    enlace.download='usuarios.json'; // nombre del archivo
    enlace.click();//ejecuta la descarga de forma automatica
    // liberar la URl temporal
    URL.revokeObjectURL(url);

});


