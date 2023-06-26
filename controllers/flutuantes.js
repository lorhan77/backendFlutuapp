var express = require('express');
//var router = express.Router();
//const  mongoose = require('mongoose');
var flutuantes = require('../models/flutuantes');


exports.getFlutuantes = async (req, res) => {
  try {
    const flutuante = await flutuantes.FlutuantesModel.find();
    res.json(flutuante);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getoneFlutuantes = async (req, res) => {   
  try {;
    res.status(201).json(await flutuantes.FlutuantesModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.createFlutuantes = async (req, res) => {   
  try {
    res.status(201).json(await flutuantes.FlutuantesModel.create(req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.updateFlutuantes= async (req, res) => {   
  try {;
    res.status(201).json(await flutuantes.FlutuantesModel.findByIdAndUpdate(req.params.id,req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



exports.deleteFlutuantes= async (req, res) => {   
  try {;
    res.status(201).json(await flutuantes.FlutuantesModel.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
