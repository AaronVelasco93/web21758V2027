// Buscamos los elementos por medio del ID
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const nombre = document.getElementById("nombre");
const lista = document.getElementById("lista");


// cambiar el contenido del elemento
document.getElementById("btnTitulo").addEventListener("click",function(){
    titulo.textContent="El titulo se cambios por medio de JS";
});
// Cambiar estilos desde JS
document.getElementById("btnColor").addEventListener("click",function(){
    // Modificaciones de propiedades de estilo

    mensaje.style.color="blue";
    mensaje.style.fontSize="45px";
    mensaje.style.fontWeight="bold";
});

// leer datos del imput
document.getElementById("btnMostrar").addEventListener("click",function(){
    const textoNombre=nombre.value;
    // modificamos el parrafo
    mensaje.textContent="Hola "+textoNombre;
});
// Crear nuevo elemento
document.getElementById("btnAgregar").addEventListener("click",function(){
    const nuevoElemento = document.createElement("li");
    // agregar contenido al nuevo elemento
    nuevoElemento.textContent="Nuevo elemento de JS"
    //appendChild agrega el nuevo elemento
    // dentro de otro elemento
    lista.appendChild(nuevoElemento);
});
//Eliminar elementos de DOM

document.getElementById("btnEliminar").addEventListener("click",function(){
    const ultimo = lista.lastElementChild;
    // verificamos que exista un elemento
    if(ultimo){
        // remover el ultimo elemento
        ultimo.remove();
    }else{
        alert("Sin registros");
    }
});