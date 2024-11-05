const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* RUTAS PARA USUARIOS */
//RUTA PARA CREAR UN USURIO 
router.post('/user', async (req, res) => {
    //const { usuario, contrasena } = req.body;
      const usuario = req.body.usuario
      const contrasena = req.body.contrasena
  
    try {
      // Crear un nuevo usuario
      const contrasenaHasheada = await hashPassword(contrasena)
  
      const newUser = new User({ usuario: usuario, contrasena: contrasenaHasheada });
      await newUser.save();
      res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
      res.status(400).json({ error: 'Error al crear el usuario', details: error });
    }
  });

//RUTA QUE TRAE TODOS LOS USUARIOS
router.get('/user', async (req, res) => {
    try {
      const result = await User.find({})
      res.status(200).send(result)
    } catch (error) {
      res.status(404).send("No data");
    }
  })

//RUTA PARA EDITAR  DATOS DE UN USUARIO
router.put('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const newInfo = req.body
        console.log("NEW INFO", newInfo)
        await albums.findByIdAndUpdate(id, newInfo, { new: true })
        res.status(200).send("Usuario editado correctamente")
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error en la actualizacion del usuario")
    }
})

module.exports = router;