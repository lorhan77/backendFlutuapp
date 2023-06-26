/*var express = require('express');
var router = express.Router();

// get funcionarios
router.get('/', async function(req, res, next) {

    const db = require('../db');
    const funcionarios = await db.findAll("funcionarios");
    
    res.render("funcionarios",{funcionarios});
});

// post funcionarios
router.post('/', async function(req, res, next) {
  try{
  const db = require('../db');
  const funcionarios = await db.Insert("funcionarios", req.body);
  res.redirect('/funcionarios');
  }catch(err){
    next(err);
  }
});

//delete funcionarios-
router.get('/delete/:id', async function(req, res, next) {
  try{
  const id = req.params.id  

  const db = require('../db');
  const funcionarios = await db.Delete("funcionarios", id);
  res.redirect('/funcionarios');
  }catch(err){
    next(err);
  }
});

//editar funcionarios
router.get('/editar/:id', async function(req, res, next) {
  try{
  const id = req.params.id  
  const db = require('../db');
  const funcionarios = await db.findOne("funcionarios", id);
  res.redirect('/funcionarios');
  }catch(err){
    next(err); 
  }
});


  

module.exports = router;*/