var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let schema=new Schema(
    
    {
        gname:{type:String, require: true},
        email:{type:String, require: true},
        date:{type:String, require: true},
        phone:{type:String, require: true},
        time:{type:String, require: true},
        guests:{type:String, require: true},
        hotelid:{type:String, require: true}
       
    }
    ,{collection: 'requests'});

module.exports=mongoose.model('requests',schema);