let mongoose = require('mongoose');
//Define a schema
let Schema = mongoose.Schema;
let equityStock = new Schema({
    SYSMBOL: {type:String},
    OPEN: {type:Number},
    HIGH: {type:Number},
    LOW:  {type:Number},
    PREV: {type:Number},
    LTP: {type:Number},
    CHNG: {type:Number},
    CHNGPER: {type:Number},
    VOLUME: {type:Number},
    VALUE: {type:Number},
    WH52: {type:Number},
    WL52: {type:Number},
    CHNG365DPER : {type:Number},
    CHNG30DPER : {type:Number},
    date : { type: Date, default: Date.now} 
});
let EquityStock = mongoose.model('EquityStock', equityStock );
module.exports = EquityStock;

