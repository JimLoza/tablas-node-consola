const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


console.log( `La base de yargs es: ${argv.base}`.trap);


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'CREADO'.yellow) )
    .catch(err => console.log(err))

