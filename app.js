
const argv = require('./config/config_yargs').argv;
const porHacer  = require('./por_hacer/por_hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando){
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log("======= Por Hacer =======".green);
            console.log(tarea.descripcion);
            console.log("Estado: ",tarea.completado);
            console.log("=========================".green);
        }
        break;
    case "actualizar":
        let actualizado = porHacer.actulizar(argv.descripcion,argv.completado);
        if ( actualizado ) {
            console.log("Tarea actualizada");
        }else {
            console.log("Tarea no encontrada");
        }
        break;
    case "eliminar":
        let eliminado = porHacer.eliminar(argv.descripcion,argv.completado);
        if ( eliminado ) {
            console.log("Tarea actualizada");
        }else {
            console.log("Tarea no encontrada");
        }
        break;
    default:
        console.log("Commando no reconocido");
        break;
}


