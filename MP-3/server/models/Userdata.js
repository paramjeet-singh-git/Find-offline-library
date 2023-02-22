const mongoose=require('mongoose');

const User= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

const Detail=new mongoose.model('Detail',User);
module.exports=Detail;