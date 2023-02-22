const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/User',
{
    useNewUrlParser:true
    
}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("connection failed")
});