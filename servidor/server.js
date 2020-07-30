require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const server = express();

server.use(express.urlencoded({extended:false}));
server.use(express.json());

server.use(require('./routes/usuarios'));

mongoose.connect(process.env.URLDB, {useNewUrlParser: true})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err))

server.listen(process.env.PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`)
})



