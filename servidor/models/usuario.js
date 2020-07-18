const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const rolesValidos= {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un role valido'
}

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        require: [true, 'El email es requerido'],
        unique: [true, ]
    },
    password: {
        type: String,
        require: [true, 'La contraseña es requerido']
    },
    img: {
        type: String,
        require: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    }
});


usuarioSchema.method.toJSON = function(){
    let userObject = Object.assign({}, this)
    delete userObject.password
    return userObject
}


module.exports = mongoose.model('Usuario', usuarioSchema)







