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
        let mensaje = "Lista de tareas";
        tareas.forEach((tareas,index)=>{
            mensaje+=`${index+1}.- ${tareas.nombre}[${tareas.completada}?"Completado":"Pendiente"]\n`;
            
        });
        alert(mensaje);
    }
}
