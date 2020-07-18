///Puerto

process.env.PORT = process.env.PORT || 3000;

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// let urlDB;

// process.env.MONGO_URI = 'mongodb+srv://sakrkoc:k32224139@cluster0.tjbcv.mongodb.net/cursosit';

// if(process.env.NODE_ENV === 'dev'){
//     urlDB = "mongodb://localhost:27017/utilidades"
// }else{
//     urlDB = process.env.MONGO_URI
// }

// process.env.URLDB = urlDB;

let urlDB;

process.env.MONGO_URI = 'mongodb+srv://sakrkoc:k32224139@cluster0.tjbcv.mongodb.net/cursosit';

if(process.env.NODE_ENV === 'dev'){
    urlDB = "mongodb+srv://sakrkoc:k32224139@cluster0.tjbcv.mongodb.net/cursosit"
}else{
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB;