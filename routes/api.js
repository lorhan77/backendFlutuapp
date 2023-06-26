var express = require('express');
var router = express.Router();

//api get clientes
router.get('/clientes', async function(req, res, next) {
    const db = require('../db');
    const clientes = await db.findAll("clientes");
    res.send(clientes);
});

//api post clientes
router.post('/clientes', async function(req, res, next) {
    try{
    const db = require('../db');
    const clientes = await db.Insert("clientes", req.body);
    res.send(clientes);
    }catch(err){
      next(err);
    }
  });


//api delete clientes
router.delete('/clientes/delete/:id', async function(req, res, next) {
    try{
    const id = req.params.id  
    const db = require('../db');
    const clientes = await db.Delete("clientes", id);
    res.send(clientes);
    }catch(err){
      next(err);
    }
  });

//-------------------------------------//

//api get funcionarios
router.get('/funcionarios', async function(req, res, next) {

    const db = require('../db');
    const funcionarios = await db.findAll("funcionarios");
    
    res.send(funcionarios);
});

//api get salas
router.get('/flutuantes', async function(req, res, next) {
  const db = require('../db');
  res.send( await db.findAll("flutuantes"));
});

//api get findOne salas
router.get('/flutuantes/:id', async function(req, res, next) {
  const id = req.params.id  
  const db = require('../db');
  res.send( await db.findOne("flutuantes", id));
});

  //api DEL salas. */
  router.delete('/flutuantes/:id', async (req, res, next) => {
    const id = req.params.id;
    const db = require('../db');
  
    try {
      res.send(await db.Delete('flutuantes',id));
    } catch (err) {
      next(err);
    }
  })

  // api PUT salas. */
router.put('/flutuantes/:id', async (req, res, next) => {
  const id = req.params.id;
  const flutuantes = req.body;
  
  try {
    res.send(await db.updateDb('flutuantes',id, flutuantes));
  } catch (err) {
    next(err);
  }
  })

  //api post salas
router.post('/flutuantes', async function(req, res, next) {
  try{
  const db = require('../db');
   
  res.send(await db.Insert("flutuantes", req.body));
  }catch(err){
    next(err);
  }
});






module.exports = router;