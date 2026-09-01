            // 0         1      2      3         4      5.    6
let frutas = ["manzana","pera","melon","platano","kiwi","fresa","uva"];
// console.log(frutas);
// console.log(frutas.length);
// console.log(frutas[1]);
// console.log(frutas[12]);
/*
for(let numero = 1;numero <= 10 ;numero++ ){
    console.log("3X"+numero+"="+(numero*3));
}
*/
/*
for(let fruta = 0; fruta < frutas.length; fruta++){
    console.log(frutas[fruta]);

}
*/
console.log("----- For of -> el contenido de el arreglo -----");
for(let fruta of frutas){
    console.log(fruta);
}

console.log("----- For in -> indices ");
for(let fruta in frutas){
    console.log(fruta);
}