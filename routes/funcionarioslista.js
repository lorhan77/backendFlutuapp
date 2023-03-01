var express = require('express');
var router = express.Router();


router.get('/', async function(req, res, next) {

    const db = require('../db');
    const funcionarios = await db.findAll();
    
    res.send(funcionarios);


  });
  

module.exports = router;