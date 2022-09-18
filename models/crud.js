const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
  
    name : {
        type : String,
        required : true
    },
    about: {
        type : String,
        required : true
    },
    problem : {
        type : String,
        required : true
    },
    underAge : {
        type : Boolean,
        required : true,
        default : false
    }
})

const CrudModel = mongoose.model('Crud', crudSchema);
module.exports = CrudModel;