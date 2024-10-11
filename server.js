// MI SERVIDOR
//LLAMAR A EXPRESS (DEPENDENCIA)
const express = require('express')
const mongoose = require("mongoose")
const router = require("./routes/index.js")
const albums = require("./models/album.js")
const users = require("./models/user.js") 
const url = "mongodb+srv://nazarelazoe:QStqgalayKHym7dJ@clasemongo.grcos.mongodb.net/?retryWrites=true&w=majority&appName=ClaseMongo"

const app = express()

//EL ORGANIZADOR DE LA DATA
app.use(express.json())

//EL ORGANIZADOR DE LA RUTA
app.use("/", router) //llego una peticion aca, manda a la router

const connectToMongo = async () => {
    try {
        await mongoose.connect(url)

        //FUNCION PARA LEVANTAR NUESTRO SERVIDOR: PARAMS (PUERTO, F(x)) //Los metodos los llamamos como los definio express en su documento
        app.listen(3000, () => {
            console.log("Servidor escuchando en puerto 3000 y BD conectada");
        });
    }catch (error){
        //SI FALLA CAE ACA, SINO SE EJECUTA EN EL TRY
        console.log(error)
    }
}
connectToMongo()




