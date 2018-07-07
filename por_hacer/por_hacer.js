

const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion)=> {

    cargarDB();

    let porHacer = {
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("./db/data.json",data, (error)=>{
        if (error) throw error;
        console.log("Registro guardado");

    });
}

const cargarDB = ()=>{
    try {
        listadoPorHacer = require('../db/data.json');
    }catch (e) {
        //Inicializar arreglo
        listadoPorHacer=[];
    }
}

const getListado = ()=>{
    cargarDB();
    return listadoPorHacer;
}

const actulizar = (descripcion, completado=true) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if ( index>= 0 ){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }

    return false;

}

const eliminar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length){
        return false;
    }

    listadoPorHacer = nuevoListado;
    guardarDB()
    return true;

    // let index = listadoPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });
    //
    // if ( index>= 0 ){
    //     listadoPorHacer.splice(index,1);
    //     guardarDB();
    //     return true;
    // }
    //
    // return false;
}


module.exports= {
    crear,
    getListado,
    actulizar,
    eliminar
}
