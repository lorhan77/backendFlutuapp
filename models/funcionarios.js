const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas')

//Define a schema
var Schema = mongoose.Schema;

const Funcionarios = new Schema({
  cpf: {type:String, required: true},
  nome:{type:String, required: true},
  cep: {type:String, required: true},
  email:{type:String, required: true},
  fone: {type:String, required: true},
  funcao: {type:String, required: true}
});

const FuncionariosModel = mongoose.model('funcionarios', Funcionarios);



module.exports = {FuncionariosModel };