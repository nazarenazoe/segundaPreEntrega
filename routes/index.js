//INDEX DE MI CARPETA ROUTERS
const express = require("express")
//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

//RUTAS
router.get("/",(req, res)=>{
    console.log(req.body)
    res.status(200).send("")
})
//RUTA REGISTRATE
router.get("/registrate",(req, res)=>{
    res.status(200).send("Registrate")
})
//RUTA INICIA SESION
router.get("/iniciaSesion",(req, res)=>{
    res.status(200).send("Registrate")
})
//RUTA AGREGAR UN ALBUM
router.get("/AgregarAlbum",(req, res)=>{
    res.status(200).send("Registrate")
})
//RUTA EDITAR UN ALBUM
router.get("/editarAlbum",(req, res)=>{
    res.status(200).send("Ingresa tu album")
})
//RUTA GIRAS
router.get("/giras",(req, res)=>{
    res.status(200).send("Ingresa tu album")
})

module.exports = router 