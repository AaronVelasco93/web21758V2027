const frutas=[];
const fruta= prompt("Ingrese una fruta");
frutas.push(fruta);
console.log(frutas);

while(confirm("Desea agregar otra fruta?")){
    const fruta= prompt("Ingrese una fruta");
    frutas.push(fruta);
    console.log(frutas);
}
console.log("Gracias por su compra");
console.log("Las frutas que compró son: " + frutas);
console.log(frutas);
for(const fruta of frutas){
    console.log(fruta);
}