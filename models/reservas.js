const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

var Reserva = new Schema ({

    numero      : { type:Number, required: true},
    sala        : { type:String, required: true},
    cliente     : { type:String,  required: true},
    funcionario : { type:String,  required: true},
    data        : { type:Date,  required: true},            
    inicio      : { type:Number,  required: true},
    fim         : { type:Number,  required: true},    
    valor       : { type:Number,  required: true},
    valortotal  : { type:Number, required: true},    
    observacao  : { type:String,  required: true},
    status      : { type:String,  required: true}    
})

const ReservaModel = mongoose.model('reservas_colls', Reserva);


module.exports = {ReservaModel}