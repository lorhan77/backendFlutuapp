const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas')

//Define a schema
var Schema = mongoose.Schema;

const Flutuantes = new Schema({
  numero: {type:Number, required: true},
  capacidade:{type:String, required: true},
  valor: {type:Number,required: true},
  tipo:{type:String, required: true},
  descricao: {type:String, required: true},
  image: {type:String, required: true}
});

const FlutuantesModel = mongoose.model('flutuantes', Flutuantes);



module.exports = {FlutuantesModel};