const mongoose = require("mongoose");

/* PROPIEDADES QUE DEBE TENER
1. Título
2. Descripción
3. Año en qué salió a la venta
4. Canciones, cada una de las cuales a su vez tendrá título y duración.
5. Portada: será una URL. */


//MODELO PARA AGREGAR ALBUM 
const album = new mongoose.Schema({
titulo: {
    type: String,
    required: true
},
descripcion: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200,
},
año: {
    type: Number,
    required: true
},
canciones: [
    {
         titulo: {
            type: String,
            required: true
        },
        duracion: {
            type: String, //en mm:ss
            required: true
        }
    }
],
portada: {
    type: String, // URL
    required: true
}
});

// Exportar el modelo
module.exports = mongoose.model('albums', albums);





