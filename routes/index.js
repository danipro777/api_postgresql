const { Router } = require('express');
const ticketsController = require('../controllers/ticketsController');
const router = Router();

// Aqui van los imports

//RUTAS

module.exports = (app) => {

    //AQUI VAN LAS RUTAS
    router.get('/tickets/get', ticketsController.find)
    router.post('/tickets/create', ticketsController.create)

    app.use('/', router);

};