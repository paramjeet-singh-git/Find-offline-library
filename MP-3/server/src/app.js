const express=require("express");
const app=express();
const port=8000;
const jwt=require('jsonwebtoken');
const jwt_secret='bcsakjmcx555d5'

app.use(express.json())
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('../db/conn.js')
const Detail=require('../models/Userdata.js')

app.get('/',(req,res)=>{
    res.send("hello");
})

app.post('/post',async(req,res)=>{
    // console.log(req.body)
    
    const newUser= new Detail({
        Name:req.body.username,
        email:req.body.email,
        password:req.body.pass
    });
    const registered=await newUser.save();
    
    
})

app.post('/post_log',async(req,res)=>{
    // console.log(req.body)
        const email_l=req.body.email_log
        const password_l=req.body.pass_log
        
        const user=await Detail.findOne({email:email_l})
        if(!user){
            return res.json({error:'user not found'})
        }
        console.log(user)
        if(password_l===user.password){
            const token=jwt.sign({email_l},jwt_secret);
            if(res.status(201)){
                return res.json({status:'ok',data:token})
            }
            else{
                return res.json({error:error})
            }

        }
        else{
            return res.status(400).send({error:'invalid data'})
        }
   
    
    
    
})

app.listen(port,()=>{
    console.log(`running on port ${port}`);
})