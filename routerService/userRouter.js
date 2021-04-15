let express = require('express');
let router = express.Router();
let User = require('../db/Schemas/user'); 
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let verifyToken = require('./auth/verifyToken');
// middleware that is specific to this router

router.get('/users', verifyToken , function (req, res) {
    console.log(res.username);
    User.find().then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send(err);
    });

});


router.get('/user', verifyToken , function(req, res){ 
console.log(res.username);
User.findOne({username:res.username}).then(data=>{
console.log(data);
res.send(data);
}).catch(err=>{
res.send(err);
})
});

// define the about route
router.post('/user', function (req, res) {
    let userObject = new Object();
    userObject.firstname=req.body.firstName;
    userObject.lastname=req.body.lastName;
    userObject.username=req.body.username;
    userObject.mobileNo=req.body.mobileNo;
    userObject.email=req.body.email;
    userObject.mobileNo=req.body.mobileNo;
    userObject.password= bcrypt.hashSync(req.body.password,10);
    user = new User(userObject);
    user.save().then( data=>{
    let token = jwt.sign({id:data.username},'my-secret', { expiresIn: 86400 });
     res.send({auth:true, token:token});
     }).catch(err=>{
     res.send(err);
     });
});

router.put('/user/:username', verifyToken , function (req, res) {
    User.updateOne({username:username},{email:req.body.email}, null, (err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    });
  });

module.exports = router