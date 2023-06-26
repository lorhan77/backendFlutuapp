var express = require('express');
//var router = express.Router();
//const  mongoose = require('mongoose');
var  clientes = require('../models/clientes');

//api get clientes
exports.getClientes = async (req, res) => {
  try {
    const cliente = await clientes.ClientesModel.find();
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//api getOne clientes
exports.getoneClientes = async (req, res) => {   
  try {;
    res.status(201).json(await clientes.ClientesModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getClienteByCpf = async (req, res) => {   
  try {;
    res.status(201).json(await clientes.ClientesModel.find({cpf:`${req.params.cpf}`}));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// api post clientes
exports.createClientes = async (req, res) => {   
  try {
    res.status(201).json(await clientes.ClientesModel.create(req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// api update clientes
exports.updateClientes = async (req, res) => {   
  try {;
    res.status(201).json(await clientes.ClientesModel.findByIdAndUpdate(req.params.id,req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// api delete clientes
exports.deleteClientes = async (req, res) => {   
  try {;
    res.status(201).json(await clientes.ClientesModel.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
