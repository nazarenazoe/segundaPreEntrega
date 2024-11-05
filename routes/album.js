const express = require('express');
const router = express.Router();
const album = require('../models/album');

/* RUTAS PARA ALBUM */

//RUTA PARA AGREGAR UN ALBUM
router.post("/discos", async (req, res) => {
  try {
    await albums.create(req.body)
    res.status(201).send("Album agregado correctamente");
  } catch (error) {
    console.log(error)
    res.status(500).send("Error al agregar album");
  }
});

//RUTA QUE TRAE TODOS LOS DISCOS      /* //localhost:3000/discos/discos  */
router.get('/discos', async (req, res) => {
  try {
    const result = await discos.find({})
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data");
  }
})


//RUTA QUE BUSCA POR  NOMBRE DEL DISCO
router.get('/discos/:titulo', async (req, res) => {
  try {
    const result = await discos.find({ titulo: req.params.titulo })
    res.status(200).send(result)
  } catch (error) {
    console.log(error)
    res.status(404).send("No data");
  }
})

//RUTA PARA EDITAR 
router.put('/discos/:id', async (req, res) => {
  try {
    const id = req.params.id
    const newInfo = req.body
    console.log("NEW INFO", newInfo)
    await albums.findByIdAndUpdate(id, newInfo, { new: true })
    res.status(200).send("Elemento editado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})


//RUTA PARA ELIMINAR
router.delete('/discos/:id', async (req, res) => {
  try {
    const id= req.params.id
    await albums.findByAndDelete(id)
    res.status(200).send("Elemento eliminado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})


module.exports = router;