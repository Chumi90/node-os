/* networkModule.js
Interfaz
Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno
*/
const os = require('node:os');
const ifaces=os.networkInterfaces()

//console.log(ifaces);

function netWork(){
    console.log("\n");
    Object.keys(ifaces).forEach((value)=>{
        //console.log(ifaces[value]);
        console.log(value);
        ifaces[value].map((i)=>{ //De cada uno de los objetos contenidos por el array de los puertos de interfaces ethernet donde se alojan objetos obenemos su familia, dirección e internal 
                console.log("familia: "+i.family);
                console.log("direccion:"+i.address);
                console.log("interno: "+i.internal);
        })
        console.log("\n");
    })

}
netWork();

