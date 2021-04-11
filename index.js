let express = require('express');
let app = express();
let port=3000;
let bodyParser = require('body-parser');
let userRouter = require('./routerService/userRouter.js');
//let bird = require('./routerService/bird');
let db = require('./db/mongoodb');
let cors = require('cors');
let loginRouter = require('./routerService/login');
let uploadFile = require('./routerService/uploadFiles');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(cors());
app.use('/uploadFile',uploadFile);
app.use(bodyParser.json());


app.use(express.static(__dirname + 'views'));
app.use('/',loginRouter);
app.use('/',userRouter);

app.post('/',function(req, res){
  console.log(req.body);
  res.send("Hello");
  });
  
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`,__dirname);
})