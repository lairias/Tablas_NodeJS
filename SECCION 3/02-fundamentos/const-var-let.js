//diferencias entre variables de reservacion dentro de node


//####### Variable VAR
var nombre = 'Alejandro'
if(true){
    var nombre = 'Fernando'
}
//
if(true){
    var nombre = 'Fernando'
}
var nombre = 'Alejandro'

//####### Variable LET
let nombre = 'Alejandro'
//dento de este ambito se esta creando la variable nombre con el dato de alejandro
if(true){
    //dentro de este ambio es otra variable distinta a nombre con el dato alejandro
   let nombre = 'Fernando'
   console.log(nombre);
   //nada de lo que existe aqui dentro existe afuera
}

//####### Variable CONST
const  nombre = 'Alejandro'
//Una constante no necesariamente es un campo que no se puede cambiar de valor
//La reservación CONST no contiene algunas sedders que lo combierte en un comando más ligero
//dento de este ambito las constante nunca puden cambiar de un valor asignado
if(true){
    //dentro de este ambio es otra variable distinta a nombre con el dato alejandro
   const nombre = 'Fernando'
   console.log(nombre);
   //nada de lo que existe aqui dentro existe afuera
}


console.log(nombre)