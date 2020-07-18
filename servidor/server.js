require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const server = express();

//CRUD (create - read - update - delete)
//configuraciones
server.use(express.urlencoded({extended:false}));
server.use(express.json());
//server.use(cors())

//habilitar las rutas
server.use(require('./routes/usuarios'));

//conectar la base de datos
mongoose.connect(process.env.URLDB, {useNewUrlParser: true})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err))
//poner a funcionar el servidor
// server.set('port', process.env.PORT)

server.listen(process.env.PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`)
})



