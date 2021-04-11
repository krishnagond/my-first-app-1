let express = require('express');
let router = express.Router();
let multer = require('multer');
let fileOperations = require('../fileConversion/excelToJson');
let EquityStock = require('../db/Schemas/equity_stock_schema');
let path = require('path');
const verifyToken = require('./auth/verifyToken');

let storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './publicFolder');
    },
    filename:function(req, file, cb){
        let date = Date.now();        
        cb(null, file.originalname);
    }
});
let upload = multer( {storage: storage});

router.post('/',verifyToken,upload.single('file'),function(req,res){
    if(req.file.originalname.split('.')[1]==="xlsx"||req.file.originalname.split('.')[1]==="xls"){
       fileOperations.excelToJson(req.file.originalname);
    }else if(req.file.originalname.split('.')[1]==="csv"||req.file.originalname.split('.')[1]==="csv"){
        fileOperations.csvToJson(req.file.originalname,data=>{
           data.forEach(stock=>{
           equityStock = new EquityStock();
            let date = new Date();
           equityStock.SYSMBOL= stock.SYSMBOL
           equityStock.OPEN= parseFloat(stock.OPEN.split(',').join(''));
           equityStock.HIGH= parseFloat(stock.HIGH.split(',').join(''));
           equityStock.LOW=parseFloat(stock.LOW.split(',').join('')),
           equityStock.PREV= parseFloat(stock.PREV.split(',').join(''));
           equityStock.LTP= parseFloat(stock.LTP.split(',').join(''));
           equityStock.CHNG= parseFloat(stock.CHNG.split(',').join(''));
           equityStock.CHNGPER= parseFloat(stock.CHNGPER.split(',').join(''));
           equityStock.VOLUME= parseFloat(stock.VOLUME.split(',').join(''));
           equityStock.VALUE= parseFloat(stock.VALUE.split(',').join(''));
           equityStock.WH52= parseFloat(stock.WH52.split(',').join(''));
           equityStock.WL52= parseFloat(stock.WL52.split(',').join(''));
           equityStock.CHNG365DPER = parseFloat(stock.CHNG365DPER.split(',').join(''));
           equityStock.CHNG30DPER = parseFloat(stock.CHNG30DPER.split(',').join(''));
           equityStock.date = date;          
           equityStock.save().then(data=>{
               console.log(data);
           }).catch(err=>{
               console.log(err);
           })
           });
        });
    } else{
        res.send({message:"something went wrong"});
    }
    res.send({message:"Hello Uploaded Files"});
});

router.get('/',verifyToken,(req,res)=>{
EquityStock.find({}).then(data=>{
res.send(data);
}).catch(err=>{
console.log(err);
res.send("Something Went Wrong");
});
});

module.exports=router;