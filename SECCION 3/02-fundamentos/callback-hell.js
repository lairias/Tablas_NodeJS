const empleados =[
    {
        id:1,
        nombre:"Alejandro"
    },
    {
        id:2,
        nombre:"Luis"
    },
    {
        id:3,
        nombre:"Ayala"
    }
]

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    },
    
]



const getEmpleado = (id, callback)=>{ 
  const empleado =  empleados.find((e)=>e.id === id)
    if(empleado){
        return callback(null,empleado)
    }else{
        return callback(`Usurio con id: ${id} no existe`)
    }
}
const getSalario = (id, callback)=>{
    const salario =  salarios.find((s)=>s.id === id)?.salario
    if(salario){
        return callback(null,salario)
    }else{
        return callback(`Salario con id: ${id} no existe`)
    }
}

getEmpleado(1, (erro,empleado)=>{
    if(erro){
        console.log('ERROR!');
        return console.log(erro)
    }
    console.log('Empleado encontrado')
    console.log(empleado)
})





