
const argv = require('yargs')
    .option('b',{alias: 'base',
    type:'number',
    default:5,
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
}).option(
    'l',{alias: 'listar',
    describe:'Muestra la tabla en la pantalla de la consola',
        type:'boolean',
}).option(
    'h',{alias: 'hasta',
    describe:'Editable el hasta donde llegara la multiplicacion',
    default: 10,
        type:'number',
}).check((argv,option)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser número'
                }
                return true
            })
    .argv;

    module.exports = argv