const mongoose = require("mongoose ");

/* PROPIEDADES QUE DEBE TENER
1. Nombre
2. Apellido
3. Email
4. Contraseña
5. Favoritos */

//MODELO PARA USUARIO
const users = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 2, 
    },
    apellido: {
        type: String,
        required: true,
        minlength: 2, 
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Por favor ingrese un email válido'], //segun google :p
      },
    contraseña: {
        type: Number,
        required: true
    },
    favoritos: {
        type: String, 
        required: true
    }
    });

// Exportar el modelo
module.exports = mongoose.model('users', users);

