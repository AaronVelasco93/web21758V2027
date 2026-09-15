let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(`
            Opciones disponibles
            1.- Agregar productos
            2.- Mostrar productos
            3.- Buscar productos
            4.- Salir
            Elige una opcion
        `));
}
function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto");
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto"));
    let precio = parseFloat(prompt("Ingresa el precio del producto"));
    if(cantidad > 0 && precio >0){
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado con exito");
    }else{
        alert("Cantidad y precio deben de ser numero positivos");
    }

    
}

function mostrarProductos(){
    if (inventario.length === 0){
        alert("No hay productos en el inventario");
    } else {
        let mensaje = "Productos en inventario: ";
        for (let i = 0; i<inventario.length; i++){
            mensaje+=`Producto encontrado: \n
            Nombre: ${inventario[i].nombre}
            Cantidad: ${inventario[i].cantidad}
            Precio: ${inventario[i].precio}
            `;
        }
        alert(mensaje);
    }

    
     
}
function buscarProducto(){
    let buscarNombre = prompt("Introduce el nombre del producto");
    let encontrado = false;
    for (let i=0; inventario.length; i++){
        if(inventario[i].nombre.toLowerCase()===buscarNombre.toLowerCase()){
            alert(`  
                Nombre del producto: 
                nombre: ${inventario[i].nombre}
                cantidad: ${inventario[i].cantidad}
                precio: ${inventario[i].precio}
                `);
        }
        encontrado = true;
        break;

    }
    if(!encontrado){
        alert("Producto no encontado");
    }
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        
        switch(opcion){
            case 1:
                agregarProducto();
            break;
            case 2: 
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opcion no valida");
        }
    }
}

iniciarPrograma();