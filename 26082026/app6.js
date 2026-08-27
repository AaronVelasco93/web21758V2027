var opcion = prompt(`
        Elija una opcion
        1: Libros
        2: Pelicula
        3: Juego
    `);
switch(opcion){
    case "1":
        console.log("El principe");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("Maicra");
        break;
    default:
        console.log("Fuera de rango de opciones");
        break;

}