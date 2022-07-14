import express from 'express';
import Contenedor from './manager/Contenedor.js';
const contenedor = new Contenedor(); //instancio
const app = express(); //inicializo express
const PORT = 8080; //defino el puerto

const server = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("<h1>Bienvenido al desafio del servidor Express</h1>")
})

app.get('/productos', async (req, res) => {
    let cont = await contenedor.getAll();
    console.log(cont);
    res.send(`<h1>LISTA:</h1> ${cont}`)
})

app.get('/productosRandom', async (req, res) => {
    let id = Math.floor(Math.random()*3+1); //como tengo 3 objetos, hago random del 1 al 3
    let prod = await contenedor.getById(id);
    console.log(prod); 
    res.send(`<h1>PRODUCTO RANDOM:</h1> ${prod}`)
})