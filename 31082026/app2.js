/*
function random (min, max){
    return Math.floor(Math.random()*(max - min)) + min;

}

console.log(random(1,45));
*/
let numeroMaquina = Math.floor(Math.random()*(10 - 1)) + 1 ;
console.log(numeroMaquina);

let numeroUser = parseInt(prompt("Adivina el numero entre 1 y 10"));
let vidas = 3;

while( numeroMaquina !== numeroUser && vidas > 1 ){
    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo Tonoto: tus vidas son"+vidas))
}

if(numeroMaquina === numeroUser){
    console.log("GANASTE");
}else{
    console.log("Perdiste sputido ajajajajaja");
}