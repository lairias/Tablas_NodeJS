console.log('Inicio de programa')// Según nuestra lógica este es el primero

//Las funciones callback son funciones asincronas, entonces generan un resultado distinto
setTimeout(()=>{
    console.log('primer Timeout')
},3000);// Según nuestra lógica este es el quinto
setTimeout(()=>{
    console.log('Segundo Timeout')
},0);// Según nuestra lógica este es el segundo
setTimeout(()=>{
    console.log('Tercero Timeout')
},0);// Según nuestra lógica este es el tercero
console.log('Fin de programa')// Según nuestra lógica este es el sexto