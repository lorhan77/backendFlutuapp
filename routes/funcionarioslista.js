var express = require('express');
var router = express.Router();


router.get('/', async function(req, res, next) {

    const db = require('../db');
    const funcionarios = await db.findAll("funcionarios");
    
    res.render("funcionarios",{funcionarios});
});

router.post('/', async function(req, res, next) {
  try{
  const db = require('../db');
  const funcionarios = await db.Insert("funcionarios", req.body);
  res.redirect('/funcionarios');
  }catch(err){
    next(err);
  }
});


  

module.exports = router;