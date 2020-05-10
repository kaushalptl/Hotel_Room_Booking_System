var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let schema=new Schema(
    
    {
        cname:{type:String, require: true},
        email:{type:String, require: true},
        password:{type:String, require: true},
        mobileno:{type:String, require: true}
    }
    ,{collection: 'customer'});

module.exports=mongoose.model('customer',schema);