
const descripcion = { demand:true, alias: "d", desc:"Descripcion de la tarea por hacer"};
const completado = {alias:"c", default:true, desc:"Marcar como completada la tarea"};


const argv = require('yargs')
    .command("crear", "Crear elemento por hacer", descripcion)
    .command("actualizar", "Actualizar el estado completado de la tarea",
        {descripcion , completado})
    .command("listar","Listar tareas")
    .command("eliminar", "Crear elemento por hacer", {descripcion })
    .help()
    .argv;

module.exports = {
    argv
}


