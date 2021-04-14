let express = require('express');
let router = express.Router();
let User = require('../db/Schemas/user'); 
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

router.post('/login',(req, res)=>{

    User.findOne({username:req.body.username}).then(data=>{
        
        if(bcrypt.compareSync(req.body.password,data.password)){
            console.log(data);
        let token = jwt.sign({username:data.username}, 'my-secret',{expiresIn: 86400});
        res.send({auth:true,token:token,user:data});
        }else{
        res.send("Invalid Credentials");
        }
    }).catch(err=>{
        console.log(err);
        res.send("Something Went Wrong.");
    });
});


router.get('/logout',(req, res)=>{
res.status(200).send({auth:false, token:null});
});

module.exports= router;