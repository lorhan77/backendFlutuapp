var express = require('express');
var router = express.Router();
var funcionarios = require('../controllers/funcionarios');

router.get('/',funcionarios.getFuncionarios);
router.get('/:id',funcionarios.getoneFuncionarios);
router.post('/', funcionarios.createFuncionarios);
router.put('/:id', funcionarios.updateFuncionarios);
router.delete('/:id', funcionarios.deleteFuncionarios);

module.exports = router;