let tareas=[];
function mostrarMenu(){
    return parseInt(prompt(`
        Opciones diponibles
        1.- Agregar tarea
        2.- Ver tarea
        3.- Marcar tarea Completada
        4.- Salir
        Elige una opcion
        `));
}
function agregarTarea(){
    let nombreTarea = prompt("Ingresa tu tarea: ");
    if(nombreTarea){
        // objeto
        let tarea={
            nombre: nombreTarea,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada de forma exitosa");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}
// Funcion para ver tareas
function verTareas(){
    if(tareas.length === 0){
        alert("Sin tareas");
    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tareas,index)=>{
            mensaje +=`${index+1}.- ${tareas.nombre} [ ${tareas.completada ? "Completado":"Pendiente"}]\n`;
            
        });
        alert(mensaje);
    }
}

function marcaTareaCompletada(){
    let numero = parseInt(prompt("Introduce el numero de tarea que deseas marcar como completada?"));
    if(numero>0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(`La tarea ${tareas[numero-1].nombre} ha sido marcada como completada`);
    }else{
        alert("Numero de tarea no valido");
    }
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcaTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar= false;
                break;
            default:
                alert("Opcion no valida");

        }
    }
}
iniciarPrograma();