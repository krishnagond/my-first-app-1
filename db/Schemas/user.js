let mongoose = require('mongoose');
//Define a schema
let Schema = mongoose.Schema;

let User = new Schema({
  username:{type:String},
  firstname :{type: String},
  lastname:{type:String},
  mobileNo:{type:Number},
  email :{type:String},
  password :{type:String}
});

let UserModel = mongoose.model('UserModel', User );


module.exports = UserModel;

