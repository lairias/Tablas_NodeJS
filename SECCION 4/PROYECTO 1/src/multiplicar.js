const Header= require('./Header')
const fs = require('fs')

const CrearArchivo = async (base = 5, listar = false, hasta=10)=>{
    try{
     
        let salida = ''
        for(let i=0; i<=hasta; i++){
            salida +=`${base} X ${i} = ${i*base} \n`
        }
        console.log(listar)
        if(listar){
            Header(base)
            console.log(salida)
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;
    }catch(err){
        throw err
    }
    
}
module.exports =CrearArchivo