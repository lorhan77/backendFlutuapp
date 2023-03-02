var express = require('express');
var router = express.Router();


router.get('/', async function(req, res, next) {

    const db = require('../db');
    const clientes = await db.findAll("clientes");
    
    res.render("clientes",{clientes});


});

router.post('/', async function(req, res, next) {
  try{
  const db = require('../db');
  const clientes = await db.Insert("clientes", req.body);
  res.redirect('/clientes');
  }catch(err){
    next(err);
  }
});
  

module.exports = router;