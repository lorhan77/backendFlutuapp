var express = require('express');
var router = express.Router();
var flutuantes = require('../controllers/flutuantes');

router.get('/',flutuantes.getFlutuantes);
router.get('/:id',flutuantes.getoneFlutuantes);
router.post('/', flutuantes.createFlutuantes);
router.put('/:id', flutuantes.updateFlutuantes);
router.delete('/:id', flutuantes.deleteFlutuantes);

module.exports = router;