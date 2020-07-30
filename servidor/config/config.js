
process.env.PORT = process.env.PORT || 3000;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


let urlDB;

process.env.MONGO_URI = 'mongodb+srv://#@cluster0.tjbcv.mongodb.net/cursosit';

if(process.env.NODE_ENV === 'dev'){
    urlDB = "mongodb+srv://#@cluster0.tjbcv.mongodb.net/cursosit"
}else{
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB;