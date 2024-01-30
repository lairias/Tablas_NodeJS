const empleados = [
  {
    id: 1,
    nombre: "Alejandro",
  },
  {
    id: 2,
    nombre: "Luis",
  },
  {
    id: 3,
    nombre: "Ayala",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolver, reject) => {
    //resolver es una funcion que se llama si se completa la sentencia
    //reject es para manejar los errores
    const empleado = empleados.find((e) => e.id === id)?.nombre;
     (empleado)
      ?  resolver(empleado)
      :  reject(`No existe empleado con id ${id}`)
    
  });
};

const getSalario = (id)=>{
    return new Promise((resolver, reject)=>{
        const salario  = salarios.find((s) => s.id === id)?.salario;
        (salario)
        ? resolver(salario)
        : reject(`No existe salario con id ${id}`)
    })
}
const id = 3

// getEmpleado(id)
//     .then((e) => console.log(e))//them manejamos la respuesta correcta
//     .catch(err => console.log(err))//catch manejamos la repuesta de error

// getSalario(id)
// .then(s => console.log(s))
// .catch(err => console.log(err))



// getEmpleado(id).then(
//     (empleado) =>{
//         getSalario(id).then((sa)=>{
//             console.log(`Nombre empleado:${empleado}
//             Salario: ${sa}`)
//         }).catch(err => console.log(err))
//     }
// ).catch(err => console.log(err))

let nombre;
getEmpleado(id)
    .then(empleado =>{
        nombre = empleado
        return getSalario(id)})
    .then(salario => console.log(`El empleado:${nombre} tiene un salario de:${salario}`))
    .catch(err=> console.log(err))