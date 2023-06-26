var express = require('express');
//var router = express.Router();
//const  mongoose = require('mongoose');
var  funcionarios = require('../models/funcionarios');

//api get Funcionarios
exports.getFuncionarios = async (req, res) => {
  try {
    const funcionario = await funcionarios.FuncionariosModel.find();
    res.json(funcionario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//api getOne Funcionarios
exports.getoneFuncionarios = async (req, res) => {   
  try {;
    res.status(201).json(await funcionarios.FuncionariosModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// api post Funcionarios
exports.createFuncionarios = async (req, res) => {   
  try {
    res.status(201).json(await funcionarios.FuncionariosModel.create(req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// api update Funcionarios
exports.updateFuncionarios = async (req, res) => {   
  try {;
    res.status(201).json(await funcionarios.FuncionariosModel.findByIdAndUpdate(req.params.id,req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// api delete Funcionarios
exports.deleteFuncionarios= async (req, res) => {   
  try {;
    res.status(201).json(await funcionarios.FuncionariosModel.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
