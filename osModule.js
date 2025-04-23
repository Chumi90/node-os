//Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
//Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

const os = require('node:os');
//console.log(os)
function module(){
    let info={
            Nombre: os.hostname(),
            Tipo: os.type(),
            Version: os.version(),
            Arquitectura: os.arch(),
            CPUs: os.cpus().length,
            MemoriaTotal: (os.totalmem()/1024/1024).toFixed(2)+" MB",
            MemoriaLibre: (os.freemem()/1024/1024).toFixed(2)+" MB"
    }
    return info;
}

console.log(module());