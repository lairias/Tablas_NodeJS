//Un callback es una funcion que se ejecutara en sierto nivel del tiempo

setTimeout(function(){console.log('Hola Mundo'),1000})


// Creamos una fucion que para encontrar un ID 
const getUsuarioById = (id,callback)=>{
    ////////////////////10,function
    const usuario = {
        id,
        nombre:"Alejandro"
    }
    setTimeout(()=>{
        callback(usuario)
    },1500)
}

//Llamamos la funcion de getUsuarioById
getUsuarioById(10, ( usuario )=>{
    ///////////Enviamos el ID 10 a buscar
    ////////////////mandamos como segundo parametro una funcion fecha
    //////////////////La variable con los datos obtenidos
    // console.log('Hola Mundo')
    console.log(usuario)
})