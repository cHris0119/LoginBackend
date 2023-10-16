const { model, Schema } = require('mongoose')

const UsuarioSchema = new Schema({

    name: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },

    contrasena: { 
        type: String, 
        required: true 
    }
})

module.exports = model('Usuario', UsuarioSchema)