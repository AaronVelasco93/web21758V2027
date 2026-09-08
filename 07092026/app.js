// var miCarro = new Object();
// miCarro.marca ="Ford";
// miCarro.anio="2013";
// miCarro.modelo="Ikon-Fiesta"
// console.log(miCarro);

// var miCarro={
//     marca: 'Ford',
//     modelo:'Ikon - Fiesta',
//     color: 'Azul',
//     anio:2013
// }
// console.log(miCarro);


var gato={
    nombre:'Kikis',
    duerme:true,
    edad:8,
    peso:4.5,
    color:"Pardo",
    enemigos:["El bb","El bobo","Mamá"]    
}

console.log(gato);
/*
console.log(`El nombre del gato del Aaron: ${gato.nombre}`);

console.log(gato.enemigos[0]);
console.log(gato.duerme);
console.log(gato['duerme']);
console.log(gato["enemigos"][1]);
console.log(gato.enemigos);
*/
// Crear
gato.comida ="Uvas";
//leer
console.log(gato.edad);
// Actualizar
gato.duerme=false;
console.log(gato);

delete gato.enemigos;

console.log(gato);
console.log(gato.hasOwnProperty("duerme"));
console.log(gato.hasOwnProperty("RFC"));