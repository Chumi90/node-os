/* networkModule.js
Interfaz
Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno
*/
const os = require('node:os');
const ifaces=os.networkInterfaces()

function netWork(){
    console.log("\n");
    Object.keys(ifaces).forEach((value)=>{
        //console.log(ifaces[value]);
        console.log(value);
        ifaces[value].map((i)=>{
                console.log("familia: "+i.family);
                console.log("direccion:"+i.address);
                console.log("interno: "+i.family);
        })
        console.log("\n");
    })

}
netWork();

