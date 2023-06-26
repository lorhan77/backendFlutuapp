var express = require('express');
var router = express.Router();
var clientes = require('../controllers/clientes');

router.get('/',clientes.getClientes);
router.get('/:id',clientes.getoneClientes);
router.get('/cpf/:cpf',clientes.getClienteByCpf);
router.post('/', clientes.createClientes);
router.put('/:id', clientes.updateClientes);
router.delete('/:id', clientes.deleteClientes);

module.exports = router;