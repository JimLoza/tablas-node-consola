const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {


    try {
        
        
        let salida = '';
        let consola = ''
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`
            consola += `${base} ${ 'x'.trap.yellow} ${i} ${'='.green}    ${base * i} \n`
        }
        
        if(listar){
            console.log('======================='.rainbow);
            console.log('    Tabla del    '.random, colors.bgRed(base));
            console.log('======================='.rainbow);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }



}

module.exports = {  //Exportar un objeto = exportando la funcion de
    crearArchivo
}