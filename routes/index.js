//INDEX DE MI CARPETA ROUTERS
const express = require("express")
//MODELS
const album = require("../models/album.js")
const user = require("../models/user.js")

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

const albums = require("./album.js")
const users = require ("./user.js")


//RUTAS
router.use('/discos', album)
router.use('/user', user)


module.exports = router 

