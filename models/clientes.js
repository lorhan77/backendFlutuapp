const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas')

//Define a schema
var Schema = mongoose.Schema;

const Clientes = new Schema({
  cpf: {type:String, required: true},
  nome:{type:String, required: true},
  cep: {type:String, required: true},
  email:{type:String, required: true},
  fone: {type:String, required: true},
});

const ClientesModel = mongoose.model('clientes', Clientes);



module.exports = {ClientesModel};