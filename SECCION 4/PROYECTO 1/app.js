
const CrearArchivo= require('./src/multiplicar')
const argv = require('./config/yargs')


// const[,,arg3 = 'base=5'] = process.argv
// const [, base = 5 ] = arg3.split("=")


CrearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo,'Creado'))
.catch(err => console.log(err))






