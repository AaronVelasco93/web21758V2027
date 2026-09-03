// funcion declarativa
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(numeroAleatorio(1, 10));
//  Funcion anonima
const numeroAleatorio2 = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(numeroAleatorio2(1, 10));
//  Funcion flecha
const numeroAleatorio3 = (min, max) =>{ 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(numeroAleatorio3(1, 10));