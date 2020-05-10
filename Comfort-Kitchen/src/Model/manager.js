var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let schema=new Schema(
    
    {
        email:{type:String, require: true},
        password:{type:String, require: true}
    }
    ,{collection: 'hotelmanager'});

module.exports=mongoose.model('manager',schema);