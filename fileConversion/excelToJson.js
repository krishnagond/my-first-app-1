var xlsx = require('node-xlsx');
var fs = require('fs');
let path = require('path');
const csvtojson = require('csvtojson');
const fileOperations={
excelToJson:function(filename){
var obj = xlsx.parse(path.join(process.cwd()+'/publicFolder/') + filename); // parses a file
var rows = [];
var writeStr = "";
//looping through all sheets
for(var i = 0; i < obj.length; i++)
{
    var sheet = obj[i];
    //loop through all rows in the sheet
    for(var j = 0; j < sheet['data'].length; j++)
    {
            //add the row to the rows array
            rows.push(sheet['data'][j]);
    }
}

//creates the csv string to write it to a file
for(var i = 0; i < rows.length; i++)
{
    writeStr += rows[i].join(",") + "\n";
}

//writes to a file, but you will presumably send the csv as a      
//response instead
fs.writeFile(path.join(process.cwd()+'/publicFolder/')+'test.csv', writeStr, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("test.csv was saved in the current directory!");
});
},

csvToJson:function(filename, callback){
 
    csvtojson({
        headers:['SYSMBOL','OPEN','HIGH','LOW','PREV', 'LTP', 'CHNG', 'CHNGPER', 'VOLUME', 'VALUE', 'WH52','WL52', 'CHNG365DPER', 'CHNG30DPER']
        }).fromFile(path.join(process.cwd()+'/publicFolder/')+filename).then(data=>{
        console.log(data);
        callback(data);
    }).catch(err=>{
        console.log(err);
        return null;
     });
   
    }
}
    module.exports=fileOperations