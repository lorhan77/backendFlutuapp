var express = require('express');
var router = express.Router();
var reservas = require('../controllers/reservas');

//consultar reservas teste
router.get('/', reservas.getReservas);
//getOne reservas teste
router.get('/:id',reservas.getOneReservas);
//consultar reservas em um perido
router.get('/consulta/', reservas.consultaDatasReservas);
// criar a reserva
router.post('/', reservas.createReserva);
// alterar sala ou periodo da reserva
router.put('/:id', reservas.updateReserva);
// ver disponibilidade de sala e data para reserva
//router.get('/disponivel/:id', reservaController.disponivelReserva);
// cancelar a reserva
router.put('/cancelar/:id', reservas.cancelarReserva);


module.exports = router;
