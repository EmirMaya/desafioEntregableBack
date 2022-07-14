// const fs = require('fs');
import fs from 'fs'
const path = './src/files/productos.json'
class Contenedor {

    save = async (objeto) => {

        try {
            let objetos = await this.getAll();
            if (objetos.length === 0) {
                objeto.id = 1;
                objetos.push(objeto);
                await fs.promises.writeFile(path, JSON.stringify(objetos, null, '\t'))
            } else {
                objeto.id = objetos[objetos.length - 1].id + 1;
                objetos.push(objeto);
                await fs.promises.writeFile(path, JSON.stringify(objetos, null, '\t'))
            }
        } catch (error) {
            console.log(error);
        }

    }

    getAll = async () => {
        try {
            if (fs.existsSync(path)) {
                let fileData = await fs.promises.readFile(path, 'utf-8');
                // let contenedor = JSON.parse(fileData);
                //SI LO CONVIERTO A OBJETO, EN EL NAVEGADOR ME MUESTRA [object, Object]
                //Y no los datos de estos objetos
                return fileData;
            } else {
                return [];
            }

        } catch (error) {
            console.log(error);
        }
    }

    getById = async (id) => {
        try {
            let objetos = await this.getAll()
            let conv = JSON.parse(objetos);
            let obj = conv.find(objeto => objeto.id === id);
            let randomObj = JSON.stringify(obj)
           
            return randomObj;
        } catch (error) {
            console.log(error);
        }
    }



}

export default Contenedor;
// module.exports = Contenedor;