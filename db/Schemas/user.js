let mongoose = require('mongoose');
//Define a schema
let Schema = mongoose.Schema;

let User = new Schema({
  firstname :{type: String},
  lastname:{type:String},
  username:{type:String},
  password :{type:String},
  email :{type:String}
});

let UserModel = mongoose.model('UserModel', User );

module.exports = UserModel;

