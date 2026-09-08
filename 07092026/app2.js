var gato={
    nombre:'Kikis',
    duerme:true,
    edad:8,
    peso:4.5,
    color:"Pardo",
    enemigos:["El bb","El bobo","Mamá","Chaparrito","copetes"],
    otros:{
        enfermedades:["Sida-Gato","sarna"],
        amigos:["patitas","manchas"],
        comida:{
            fria:"Atun",
            caliente:"Caldo de pollo"
        }

    }, 
    comer: function (){
        console.log("esta comiendo :3");
    },
    cenando: function(comida){
        // return "El gato esta cenando un " + comida;
        return `El gato esta cenando un ${comida}`;
    },
    datosGato: function(edadGato){
        return `${this.nombre} tiene la edad de: ${edadGato}`;
    },
    mostrarEnemigos(){
        return this.enemigos.forEach((nombre,index)=>console.log(`${index+1}: ${nombre}`));
    }

};
gato.mostrarEnemigos();

console.log(gato.datosGato(6));

/*
gato.comer();
console.log(gato.otros.enfermedades [1]);

console.log(gato.cenando("Sopa"));
*/