let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

function verifyToken(req, res,next){
let token = req.headers.authorization;
if(token!=null){
    console.log(token);
jwt.verify(token,'my-secret',function(err, data){
    if(err){
        console.log(err);
        return res.status(404).send({auth:false, message:"Failed To authenticate Token"});
    }else{
        console.log(data.username);
        res.username=data.username;
        
    next();
    }
})
}else{
return res.status(403).send({auth:false,message:'No Token Provided'});
}
}

module.exports=verifyToken;