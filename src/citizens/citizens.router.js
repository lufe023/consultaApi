const router = require('express').Router()

const citizensServices = require('./citizens.services')


//esta ruta para ver todos los usuarios la protegemos primero con un token y luego con el nivel del rol del usuario
router.get('/getAllCitizen', citizensServices.getAllCitizens)

router.get('/:cedula', citizensServices.getOnCitizen)

module.exports = router